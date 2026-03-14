import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBrand } from "./BrandProvider.jsx";
import BrandModal from "./BrandModal.jsx";

export default function BrandHeader() {
  const { brand } = useBrand();
  const hasCompanyName = Boolean(brand?.companyName?.trim());

  const [showBrandModal, setShowBrandModal] = useState(!hasCompanyName);

  useEffect(() => {
    setShowBrandModal(!hasCompanyName);
  }, [hasCompanyName]);

  return (
    <>
      <header style={styles.header}>
        <div
          style={{
            ...styles.cover,
            backgroundImage: brand.coverImage ? `url(${brand.coverImage})` : "none",
          }}
        >
          <div style={styles.overlay} />

          <div style={styles.inner}>
            <h1
              style={{
                margin: 0,
                color: brand.textColor || "#ffffff",
                fontFamily: brand.fontFamily || "Inter",
                fontSize: 42,
                fontWeight: 800,
                position: "relative",
                zIndex: 2,
              }}
            >
              {brand.companyName || "Mi Dashboard"}
            </h1>

            <div style={styles.actions}>
              <a
                href="/manual_dashboard_completo_clientes.pdf"
                target="_blank"
                rel="noreferrer"
                style={styles.btnGhost}
              >
                Manual
              </a>

              <button
                type="button"
                onClick={() => setShowBrandModal(true)}
                style={styles.btnGhost}
              >
                Editar marca
              </button>

              <Link to="/" style={styles.btnPrimary}>
                Ir a la web
              </Link>
            </div>
          </div>
        </div>
      </header>

      <BrandModal
        show={showBrandModal}
        forceRequired={!hasCompanyName}
        onHide={() => {
          if (!hasCompanyName) return;
          setShowBrandModal(false);
        }}
      />
    </>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    background: "#fff",
  },
  cover: {
    minHeight: 220,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    borderBottom: "1px solid #e5e7eb",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
  },
  inner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px 24px",
    minHeight: 220,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "relative",
    zIndex: 2,
  },
  actions: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  btnGhost: {
    border: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 600,
  },
  btnPrimary: {
    border: "none",
    background: "#111827",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
  },
};