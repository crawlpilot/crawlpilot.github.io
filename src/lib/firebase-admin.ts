import * as admin from "firebase-admin";

const firebaseAdminConfig = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

function getAdminApp() {
    if (!admin.apps.length) {
        const missing = [];
        if (!firebaseAdminConfig.projectId) missing.push("NEXT_PUBLIC_FIREBASE_PROJECT_ID");
        if (!firebaseAdminConfig.clientEmail) missing.push("FIREBASE_CLIENT_EMAIL");
        if (!firebaseAdminConfig.privateKey) missing.push("FIREBASE_PRIVATE_KEY");

        if (missing.length > 0) {
            console.warn(`⚠️ Firebase Admin missing vars: ${missing.join(", ")}. This is expected during build, but check Vercel env vars if this is a request.`);
            return null;
        }

        console.log("✅ Initializing Firebase Admin with Project:", firebaseAdminConfig.projectId);
        return admin.initializeApp({
            credential: admin.credential.cert(firebaseAdminConfig as any),
        });
    }
    return admin.app();
}

const app = getAdminApp();

export const adminDb = app ? app.firestore() : null as any;
export const adminAuth = app ? app.auth() : null as any;
