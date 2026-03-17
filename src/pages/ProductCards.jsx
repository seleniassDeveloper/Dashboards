import { Link } from "react-router-dom";
import "./productCards.css";

export default function ProductCards() {
  return (
    <section className="product-system">
      <div className="product-system__wrapper">

        {/* HEADER SIMPLE */}
        <div className="product-system__intro">
          <h2>Dashboard Emprendedor</h2>
          <p>
            Sistema de gestión diseñado para centralizar citas, clientes,
            trabajadores, pagos y métricas en una sola interfaz.
          </p>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="product-system__layout">

          {/* IZQUIERDA → IMAGEN REAL */}
          <div className="product-system__imageWrap">
            <img
              src="/dashboard-product-card.png"
              alt="Dashboard"
              className="product-system__image"
            />
          </div>

          {/* DERECHA → EXPLICACIÓN POR BLOQUES */}
          <div className="product-system__blocks">

            <div className="block">
              <h4>Panel principal</h4>
              <p>
                Visualiza el estado del negocio con métricas clave:
                citas, estados y distribución por servicio y trabajador.
              </p>
            </div>

            <div className="block">
              <h4>Calendario operativo</h4>
              <p>
                Gestiona citas por día, semana o mes con visualización clara
                de horarios y disponibilidad.
              </p>
            </div>

            <div className="block">
              <h4>Gestión de citas</h4>
              <p>
                Crea, edita y controla el estado de cada cita en tiempo real,
                incluyendo confirmación, cancelación o finalización.
              </p>
            </div>

            <div className="block">
              <h4>Control de negocio</h4>
              <p>
                Consulta ingresos, rendimiento por servicio y eficiencia
                operativa desde el mismo panel.
              </p>
            </div>

            <div className="product-system__actions">
              <Link to="/app" className="btn-primary">
                Abrir demo
              </Link>

              <a
                href="/manual_dashboard_completo_clientes.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Ver manual completo
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}