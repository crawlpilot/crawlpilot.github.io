import { NextResponse } from 'next/server';
import { verifyFirebaseIdToken } from '@/lib/auth-verify';

export async function POST(request: Request) {
    try {
        const { idToken } = await request.json();
        const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

        if (!idToken) {
            return NextResponse.json({ error: 'Missing ID token' }, { status: 400 });
        }

        // 1. Verify the ID token (Keyless approach)
        const user = await verifyFirebaseIdToken(idToken);
        const { uid, email } = user;

        console.log(`👤 Authenticated user via Keyless JWT: ${email} (${uid})`);

        // 2. Fetch User Profile & Update lastLogin via Firestore REST API
        // This uses the user's OWN token, so it obeys Security Rules!
        const firestoreBaseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}`;

        try {
            // Update lastLogin
            await fetch(`${firestoreBaseUrl}?updateMask.fieldPaths=lastLogin&updateMask.fieldPaths=email`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fields: {
                        lastLogin: { stringValue: new Date().toISOString() },
                        email: { stringValue: email }
                    }
                })
            });

            // Fetch latest data (to get the 'plan')
            const getRes = await fetch(firestoreBaseUrl, {
                headers: { 'Authorization': `Bearer ${idToken}` }
            });
            const userData = await getRes.json();

            // Extract the 'plan' field if it exists (Firestore REST format is nested)
            const plan = userData?.fields?.plan?.stringValue || 'free';

            return NextResponse.json({
                success: true,
                profile: {
                    uid,
                    email,
                    plan,
                    lastLogin: new Date().toISOString(),
                }
            });

        } catch (restError) {
            console.error('⚠️ Firestore REST update failed (Profile might not exist or Rules block):', restError);
            // Non-blocking for the extension sync
            return NextResponse.json({
                success: true,
                profile: { uid, email, plan: 'free', lastLogin: new Date().toISOString() }
            });
        }

    } catch (error: any) {
        console.error('❌ Auth Sync API Error:', error);
        return NextResponse.json({
            error: 'Authentication failed',
            details: error.message
        }, { status: 401 });
    }
}
