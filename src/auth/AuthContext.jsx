import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "../lib/firebase.js";

const AuthContext = createContext(null);

function trim(v) {
  return String(v ?? "").trim();
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setUser(null);
      setLoading(false);
      return;
    }

    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      setError(null);
    });

    return () => unsub();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setError(null);
    const auth = getFirebaseAuth();
    if (!auth) throw new Error("Firebase no configurado");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    await signInWithPopup(auth, provider);
  }, []);

  const signInWithEmail = useCallback(async (email, password) => {
    setError(null);
    const auth = getFirebaseAuth();
    if (!auth) throw new Error("Firebase no configurado");
    await signInWithEmailAndPassword(auth, trim(email), password);
  }, []);

  const signUpWithEmail = useCallback(async (email, password) => {
    setError(null);
    const auth = getFirebaseAuth();
    if (!auth) throw new Error("Firebase no configurado");
    await createUserWithEmailAndPassword(auth, trim(email), password);
  }, []);

  const logout = useCallback(async () => {
    setError(null);
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      setError,
      signInWithGoogle,
      signInWithEmail,
      signUpWithEmail,
      logout,
      isConfigured: isFirebaseConfigured(),
    }),
    [
      user,
      loading,
      error,
      setError,
      signInWithGoogle,
      signInWithEmail,
      signUpWithEmail,
      logout,
    ]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return ctx;
}
