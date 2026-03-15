import { NextResponse } from 'next/server';
import { verifyFirebaseIdToken } from '@/lib/auth-verify';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(request: Request) {
    console.log('🌐 [API] Auth Sync check-in (Node.js Runtime)');
    try {
        const { idToken } = await request.json();

        if (!idToken) {
            return NextResponse.json({ error: 'Missing ID token' }, { status: 400 });
        }

        // 1. Verify the ID token
        const user = await verifyFirebaseIdToken(idToken);
        const { uid, email } = user;

        if (!adminDb) {
            console.error('❌ Firebase Admin not initialized');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        console.log(`👤 Syncing user: ${email} (${uid})`);

        // 2. Create or Update User Document
        const userRef = adminDb.collection('users').doc(uid);

        // We use merge: true to avoid overwriting subscription data if it exists
        await userRef.set({
            uid,
            email,
            lastLogin: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            // Only set default plan if document doesn't exist
        }, { merge: true });

        // Ensure plan exists
        const doc = await userRef.get();
        if (!doc.exists || !doc.data()?.plan) {
            await userRef.update({ plan: 'free' });
        }

        const userData = doc.data();

        return NextResponse.json({
            success: true,
            profile: {
                uid,
                email,
                plan: userData?.plan || 'free',
                lastLogin: new Date().toISOString(),
            }
        });

    } catch (error: any) {
        console.error('❌ Auth Sync API Error:', error);
        return NextResponse.json({
            error: 'Authentication failed',
            details: error.message
        }, { status: 401 });
    }
}
