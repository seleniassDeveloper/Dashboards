/**
 * Todo lo del dashboard + Firebase vive en este módulo para poder hacer
 * lazy import desde App.jsx (la landing no carga Firebase).
 */
import { AuthProvider } from "../auth/AuthContext.jsx";
import CloudBrandSync from "../auth/CloudBrandSync.jsx";
import LoginGate from "../auth/LoginGate.jsx";
import DashboardPage from "./DashboardPage.jsx";

export default function DashboardShell() {
  return (
    <AuthProvider>
      <CloudBrandSync />
      <LoginGate>
        <DashboardPage />
      </LoginGate>
    </AuthProvider>
  );
}
