import { useEffect, useRef } from "react";
import heroImage from "../../src/assets/Imageini.png";
import "../styles/hero.css";

export default function Hero() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const card = containerRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const onScroll = () => {
      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (vh + rect.height))
      );

      const yCard = (0.5 - progress) * 14;
      const yImg = (0.5 - progress) * -22;

      card.style.transform = `translateY(${yCard}px)`;
      img.style.transform = `translateY(${yImg}px) scale(1.02)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div ref={containerRef} className="hero-container hero-float">
        <div className="hero-text">
          <h1>
            Organiza tu negocio, clientes <br />
            y tareas en un solo dashboard.
          </h1>
          <p>
            Dashboards de Notion listos para usar. <br />
            Diseñados para emprendedores y freelancers.
          </p>
        </div>

        <div className="hero-image">
          <img ref={imgRef} src={heroImage} alt="Dashboard Notion" />
        </div>
      </div>
    </section>
  );
}