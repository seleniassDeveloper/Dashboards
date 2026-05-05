import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export function isFirebaseConfigured() {
  return Boolean(
    String(config.apiKey || "").trim() &&
      String(config.projectId || "").trim() &&
      String(config.appId || "").trim()
  );
}

let app;
let analytics;

export function getFirebaseApp() {
  if (!isFirebaseConfigured()) return null;
  if (!getApps().length) {
    app = initializeApp(config);
  } else {
    app = getApps()[0];
  }
  return app;
}

export function getFirebaseAuth() {
  const a = getFirebaseApp();
  return a ? getAuth(a) : null;
}

export function getFirebaseDb() {
  const a = getFirebaseApp();
  return a ? getFirestore(a) : null;
}

export function getFirebaseAnalytics() {
  const a = getFirebaseApp();
  if (a && !analytics && typeof window !== "undefined") {
    analytics = getAnalytics(a);
  }
  return analytics;
}
