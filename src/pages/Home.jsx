import { useEffect } from "react";
import Hero from "../pages/Hero.jsx";
import BigQuote from "./BigQuote.jsx";
import FeatureRow from "./FeatureRow.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Pricing from "./Pricing.jsx";
import ProductCards from "./ProductCards.jsx";
import "../styles/scrollReveal.css";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      <main className="stack">
        <section className="reveal">
          <Hero />
        </section>

        <section className="grid2 reveal">
          <ProductCards />
          <HowItWorks />
        </section>

        <section className="reveal">
          <FeatureRow />
        </section>

        {/* <section className="reveal">
          <BigQuote />
        </section> */}

        <section className="reveal">
          <Pricing />
        </section>
      </main>
    </div>
  );
}