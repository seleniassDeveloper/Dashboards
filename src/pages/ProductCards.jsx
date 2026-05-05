import "./productCards.css";
import SEC4 from "../assets/imageseccion4.png";

export default function ProductCards() {
  return (
    <section className="product-deep">
      <div className="product-deep__wrapper">
        <div className="product-deep__intro">
          <span className="product-deep__eyebrow">Vista del producto</span>
          <h2>Una interfaz pensada para el día a día</h2>
          <p>
            Calendario, citas y métricas en la misma pantalla para que no pierdas
            el hilo de la operación.
          </p>
        </div>

        <div className="product-deep__visual">
          <img
            src={SEC4}
            alt="Dashboard con calendario, métricas y gestión de citas"
            className="product-deep__image"
          />


        </div>


      </div>
    </section>
  );
}