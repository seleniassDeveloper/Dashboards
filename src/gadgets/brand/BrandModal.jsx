import { useEffect, useState } from "react";
import { useBrand } from "./BrandProvider.jsx";

export default function BrandModal({ show, onHide, forceRequired = false }) {
  const { brand, setBrand } = useBrand();

  const [companyName, setCompanyName] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");

  useEffect(() => {
    if (!show) return;

    setCompanyName(brand?.companyName || "");
    setCoverImage(brand?.coverImage || "");
    setTextColor(brand?.textColor || "#ffffff");
  }, [show, brand]);

  if (!show) return null;

  const handleSave = () => {
    if (!companyName.trim()) return;

    setBrand({
      ...brand,
      companyName: companyName.trim(),
      coverImage: coverImage.trim(),
      textColor,
    });

    onHide?.();
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={{ margin: 0 }}>Personalizar header</h2>
          {!forceRequired && (
            <button type="button" onClick={onHide} style={styles.closeBtn}>
              ×
            </button>
          )}
        </div>

        <div style={styles.body}>
          <div>
            <label style={styles.label}>Nombre de la empresa</label>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              style={styles.input}
            />
          </div>

          <div>
            <label style={styles.label}>Imagen de fondo</label>
            <input
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              style={styles.input}
            />
          </div>

          <div>
            <label style={styles.label}>Color del texto</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              style={{ width: 60, height: 40 }}
            />
          </div>
        </div>

        <div style={styles.footer}>
          {!forceRequired && (
            <button type="button" onClick={onHide} style={styles.secondaryBtn}>
              Cancelar
            </button>
          )}
          <button type="button" onClick={handleSave} style={styles.primaryBtn}>
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "grid",
    placeItems: "center",
    zIndex: 9999,
  },
  modal: {
    width: "100%",
    maxWidth: 700,
    background: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    padding: 24,
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    padding: 24,
    display: "grid",
    gap: 16,
  },
  footer: {
    padding: 24,
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
  },
  label: {
    display: "block",
    marginBottom: 8,
    fontWeight: 600,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "1px solid #d1d5db",
  },
  primaryBtn: {
    border: "none",
    background: "#111827",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 10,
    cursor: "pointer",
  },
  secondaryBtn: {
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#111827",
    padding: "12px 16px",
    borderRadius: 10,
    cursor: "pointer",
  },
  closeBtn: {
    border: "none",
    background: "transparent",
    fontSize: 28,
    cursor: "pointer",
  },
};