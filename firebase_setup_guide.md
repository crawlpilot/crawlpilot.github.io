# Firebase Configuration Guide

Follow these steps to collect the environment variables required for your project.

## 1. Public Client Configuration (Frontend)
These variables are needed for the browser to communicate with Firebase.

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Select your project.
3.  Click the **Project Overview** (gear icon) -> **Project settings**.
4.  In the **General** tab, scroll down to **Your apps**.
5.  If you don't have a web app, click the **</>** icon to add one.
6.  Look for the `firebaseConfig` object. It contains:
    - `apiKey` -> `NEXT_PUBLIC_FIREBASE_API_KEY`
    - `authDomain` -> `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
    - `projectId` -> `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
    - `storageBucket` -> `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
    - `messagingSenderId` -> `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
    - `appId` -> `NEXT_PUBLIC_FIREBASE_APP_ID`

## 2. Admin Service Account (Backend)
These variables are required for the server (`route.ts`) to manage users and sync data bypasssing security rules.

1.  In the same **Project settings** page, go to the **Service accounts** tab.
2.  Click **Generate new private key**.
3.  A `.json` file will download. Open it with a text editor.
4.  Copy the values into your `.env.local`:
    - `"client_email"` -> `FIREBASE_CLIENT_EMAIL`
    - `"private_key"` -> `FIREBASE_PRIVATE_KEY` 
    
> [!IMPORTANT]
> When pasting the `FIREBASE_PRIVATE_KEY` into Vercel or your `.env.local`, make sure it is wrapped in double quotes and includes all the literal `\n` characters:
> `FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"`

## 3. Deployment on Vercel
1.  Go to your Project Settings on Vercel.
2.  Go to **Environment Variables**.
3.  Add each variable from your `.env.local`.
4.  **Redeploy** your project for changes to take effect.
