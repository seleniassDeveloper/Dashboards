import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrandProvider } from "./gadgets/brand/BrandProvider.jsx";
import Home from "./pages/Home.jsx";
import DashboardPage from "./dashboard/DashboardPage.jsx";

export default function App() {
  return (
    <BrandProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </BrandProvider>
  );
}