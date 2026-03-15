import { jwtVerify, createRemoteJWKSet } from 'jose';

const FIREBASE_CONF_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const ISSUER_PREFIX = 'https://securetoken.google.com/';

// Keys are cached by jose
const JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'));

export async function verifyFirebaseIdToken(idToken: string) {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    if (!projectId) {
        throw new Error('NEXT_PUBLIC_FIREBASE_PROJECT_ID is not defined');
    }

    try {
        const { payload } = await jwtVerify(idToken, JWKS, {
            issuer: `${ISSUER_PREFIX}${projectId}`,
            audience: projectId,
        });

        return {
            uid: payload.sub as string,
            email: payload.email as string,
            email_verified: payload.email_verified as boolean,
        };
    } catch (error) {
        console.error('❌ JWT Verification failed:', error);
        throw new Error('Invalid ID token');
    }
}
