import BrandHeader from "../gadgets/brand/BrandHeader.jsx";
import DashboardWorkspace from "./DashboardWorkspace.jsx";

export default function DashboardPage() {
  return (
    <div className="dashboard-shell">
      <BrandHeader />

      <main className="dashboard-shell__main">
        <div className="dashboard-shell__panel">
          <DashboardWorkspace />
        </div>
      </main>
    </div>
  );
}
