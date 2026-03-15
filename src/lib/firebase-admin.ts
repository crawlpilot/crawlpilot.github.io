import * as admin from "firebase-admin";

const firebaseAdminConfig = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

function getAdminApp() {
    if (!admin.apps.length) {
        if (!firebaseAdminConfig.privateKey || !firebaseAdminConfig.clientEmail) {
            console.warn("Firebase Admin credentials missing. This is expected during build if env vars are not set.");
            // Return a dummy app or handle accordingly if needed, 
            // but usually we just want to avoid the crash during build.
            return null;
        }
        return admin.initializeApp({
            credential: admin.credential.cert(firebaseAdminConfig as any),
        });
    }
    return admin.app();
}

const app = getAdminApp();

export const adminDb = app ? app.firestore() : null as any;
export const adminAuth = app ? app.auth() : null as any;
