import { useMemo, useState } from "react";
import "../styles/Pricing.css";
import PaymentModal from "./Modales/PaymentModal";

export default function Pricing() {
  const plans = useMemo(
    () => [
      {
        id: "individual-5",
        title: "Dashboard Individual",
        priceLabel: "$5",
        checkoutUrl: "https://buy.stripe.com/REEMPLAZA_ESTE_LINK_5",
        featured: false,
      },
      {
        id: "individual-7",
        title: "Dashboard Individual",
        priceLabel: "$7",
        checkoutUrl: "https://buy.stripe.com/REEMPLAZA_ESTE_LINK_7",
        featured: true,
      },
      {
        id: "team-10",
        title: "Team",
        priceLabel: "$10",
        checkoutUrl: "https://buy.stripe.com/REEMPLAZA_ESTE_LINK_10",
        featured: false,
      },
    ],
    []
  );

  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [showPayModal, setShowPayModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  });

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setShowPayModal(true);
  };

  const closeModal = () => setShowPayModal(false);

  const handlePay = () => {
    if (!selectedPlan?.checkoutUrl || selectedPlan.checkoutUrl.includes("REEMPLAZA")) {
      alert("Falta configurar el checkoutUrl (Stripe Payment Link) para este plan.");
      return;
    }
    // opcional: podrías validar formData acá
    window.location.href = selectedPlan.checkoutUrl;
  };

  return (
    <section className="pricing">
      <h2 className="pricing__title">Elige tu Plan</h2>

      <div className="pricing__grid">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`pricing__card ${p.featured ? "pricing__card--featured" : ""}`}
          >
            <p className="pricing__label">{p.title}</p>
            <p className="pricing__price">{p.priceLabel}</p>

            <button
              type="button"
              className={`pricing__button ${p.featured ? "pricing__button--featured" : ""}`}
              onClick={() => openModal(p)}
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>

      <PaymentModal
        show={showPayModal}
        onHide={closeModal}
        selectedPlan={selectedPlan}
        onPay={handlePay}
        formData={formData}
        setFormData={setFormData}
      />
    </section>
  );
}