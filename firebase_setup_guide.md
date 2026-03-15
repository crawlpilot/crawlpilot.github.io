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

## 3. Lemon Squeezy Payments
These variables are required for handling checkouts and processing webhooks.

1.  Go to your [Lemon Squeezy Dashboard](https://app.lemonsqueezy.com/).
2.  **API Key**: Go to **Settings** -> **API** -> **API Keys** and generate a new key.
    - Set to `LEMON_SQUEEZY_API_KEY`
3.  **Store ID**: Look at your dashboard URL after `/stores/`. It's a number.
    - Set to `LEMON_SQUEEZY_STORE_ID`
4.  **Webhook Secret**: Go to **Settings** -> **Webhooks**.
    - Create a new webhook pointing to `https://your-domain.vercel.app/api/webhooks/lemon-squeezy`.
    - Select events: `subscription_created`, `subscription_updated`, etc.
    - Create a "Signing Secret" and set it to `LEMON_SQUEEZY_WEBHOOK_SECRET`.
5.  **Variant IDs**: Go to **Store** -> **Products**.
    - Click on your product, then click on the **Variant** (e.g., "Pro Plan").
    - The Variant ID is the number in the URL (or listed under the variant name).
    - Set to `NEXT_PUBLIC_LEMON_SQUEEZY_PRO_VARIANT_ID`

## 4. Deployment on Vercel
1.  Go to your Project Settings on Vercel.
2.  Go to **Environment Variables**.
3.  Add each variable from your `.env.local` (both Firebase and Lemon Squeezy).
4.  **CRITICAL**: Redeploy your project for the client-side `NEXT_PUBLIC_` variables to take effect.
