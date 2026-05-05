import { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useBrand } from "../gadgets/brand/BrandProvider.jsx";
import { getFirebaseDb, isFirebaseConfigured } from "../lib/firebase.js";
import { useAuth } from "./AuthContext.jsx";

/**
 * Carga y guarda la marca del dashboard en Firestore por usuario.
 */
export default function CloudBrandSync() {
  const { user } = useAuth();
  const { brand, setBrand } = useBrand();
  const [cloudReady, setCloudReady] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured() || !user?.uid) {
      setCloudReady(false);
      return;
    }

    const db = getFirebaseDb();
    if (!db) {
      setCloudReady(false);
      return;
    }

    let cancelled = false;
    setCloudReady(false);

    (async () => {
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (cancelled) return;
        const remote = snap.exists() ? snap.data()?.dashboardBrand : null;
        if (remote && typeof remote === "object") {
          setBrand((prev) => ({ ...prev, ...remote }));
        }
      } catch (e) {
        console.error("No se pudo cargar la marca desde la nube", e);
      } finally {
        if (!cancelled) setCloudReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user?.uid, setBrand]);

  useEffect(() => {
    if (!isFirebaseConfigured() || !user?.uid || !cloudReady) return;
    const db = getFirebaseDb();
    if (!db) return;

    const t = window.setTimeout(async () => {
      try {
        await setDoc(
          doc(db, "users", user.uid),
          {
            dashboardBrand: brand,
            email: user.email ?? null,
            displayName: user.displayName ?? null,
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (e) {
        console.error("No se pudo guardar la marca en la nube", e);
      }
    }, 800);

    return () => window.clearTimeout(t);
  }, [brand, user, cloudReady]);

  return null;
}
