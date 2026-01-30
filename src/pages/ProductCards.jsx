import { useEffect, useRef, useState } from "react";
import emprendedorImg from "../assets/img1secc2.png";
import howItWorksImg from "../assets/image2.png";
import "../../src/styles/Products.css";

export default function ProductCards() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        // Si querés que se repita cada vez que subís/bajás, descomentá:
        // else setInView(false);
      },
      { threshold: 0.25 } // dispara cuando ~25% de la sección es visible
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="products">
      <div className={`products-container ${inView ? "is-visible" : ""}`}>
        {/* Card 1 - entra desde izquierda */}
        <article className="product-card product-card--fromLeft">
          <div className="product-card__media">
            <img src={emprendedorImg} alt="Dashboard Emprendedor" />
          </div>
        </article>

        {/* Card 2 - entra desde derecha */}
        <article className="product-card product-card--info product-card--fromRight">
          <div className="product-card__media product-card__media--full">
            <img src={howItWorksImg} alt="Cómo funciona" />
          </div>
        </article>
      </div>
    </section>
  );
}