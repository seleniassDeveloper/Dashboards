import BrandHeader from "../gadgets/brand/BrandHeader.jsx";

export default function DashboardPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <BrandHeader />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            padding: 24,
          }}
        >
          Dashboard funcionando
        </div>
      </main>
    </div>
  );
}