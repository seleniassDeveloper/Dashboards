import "./productCards.css";
import SEC4 from "../assets/imageseccion4.png";

export default function ProductCards() {
  return (
    <section>
      <div className="product-deep__wrapper">
       

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