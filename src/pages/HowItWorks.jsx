import { useEffect, useRef, useState } from "react";
import "../styles/HowItWorks.css";
import mockup from "../assets/seccion3.png";

export default function HowItWorks() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="how">
      <div
        ref={ref}
        className={`how__container ${visible ? "is-visible" : ""}`}
      >
        <div className="how__image">
          <img src={mockup} alt="Dashboard de Peluquería" />
        </div>
      </div>
    </section>
  );
}