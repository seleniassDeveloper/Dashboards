import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBrand } from "./BrandProvider.jsx";
import BrandModal from "./BrandModal.jsx";
import { MANUAL_URL } from "../../config/site.js";
import { useAuth } from "../../auth/AuthContext.jsx";
import { isAuthDisabled } from "../../auth/authConfig.js";
import "./BrandHeader.css";

export default function BrandHeader() {
  const { brand } = useBrand();
  const { user, logout } = useAuth();
  const hasCompanyName = Boolean(brand?.companyName?.trim());

  const [showBrandModal, setShowBrandModal] = useState(!hasCompanyName);

  useEffect(() => {
    setShowBrandModal(!hasCompanyName);
  }, [hasCompanyName]);

  const titleStyle = {
    color: brand.textColor || "#ffffff",
    fontFamily: brand.fontFamily || "var(--font-sans, system-ui, sans-serif)",
  };

  return (
    <>
      <header className="brand-header-shell">
        <div
          className="brand-header-cover"
          style={{
            backgroundImage: brand.coverImage ? `url(${brand.coverImage})` : "none",
          }}
        >
          <div className="brand-header-overlay" />

          <div className="brand-header-inner">
            <h1 className="brand-header-title" style={titleStyle}>
              {brand.companyName || "Mi Dashboard"}
            </h1>

            <div className="brand-header-actions">
              <a
                href={MANUAL_URL}
                target="_blank"
                rel="noreferrer"
                className="brand-header-btn"
              >
                Manual
              </a>

              <button
                type="button"
                onClick={() => setShowBrandModal(true)}
                className="brand-header-btn"
              >
                Editar marca
              </button>

              <Link to="/" className="brand-header-btn brand-header-btn--primary">
                Ir a la web
              </Link>

              {user && !isAuthDisabled() ? (
                <button
                  type="button"
                  className="brand-header-btn"
                  onClick={() => logout()}
                >
                  Cerrar sesión
                </button>
              ) : null}
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