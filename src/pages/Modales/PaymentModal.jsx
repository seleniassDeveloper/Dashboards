import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function PaymentModal({
  show,
  onHide,
  selectedPlan,
  onPay,
  formData,
  setFormData,
}) {
  const update = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPay?.();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Pago del plan</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-1">
          Plan: <strong>{selectedPlan?.title ?? "-"}</strong>
        </p>
        <p className="mb-3">
          Total: <strong>{selectedPlan?.priceLabel ?? "-"}</strong>
        </p>

        <Form onSubmit={handleSubmit} className="pricing__form">
          <Form.Control
            className="mb-2"
            value={formData.name}
            onChange={update("name")}
            type="text"
            placeholder="Nombre completo"
            required
          />

          <Form.Control
            className="mb-2"
            value={formData.email}
            onChange={update("email")}
            type="email"
            placeholder="Email"
            required
          />

          <Form.Control
            className="mb-3"
            value={formData.business}
            onChange={update("business")}
            type="text"
            placeholder="Nombre del negocio (opcional)"
          />

          <div className="pricing__secure mb-3">
            🔒 Pago seguro – serás redirigida a un checkout protegido
          </div>

          <Button type="submit" variant="dark" className="w-100 pricing__payBtn">
            Continuar al pago
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="light" onClick={onHide}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}