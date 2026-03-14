import { createContext, useContext, useEffect, useState } from "react";

const BrandContext = createContext();

const DEFAULT_BRAND = {
  companyName: "Mi Dashboard",
  coverImage: "",
  textColor: "#ffffff",
  fontFamily: "Inter",
  darkMode: false,
};

export function BrandProvider({ children }) {
  const [brand, setBrand] = useState(() => {
    const saved = localStorage.getItem("dashboard-brand");
    return saved ? JSON.parse(saved) : DEFAULT_BRAND;
  });

  useEffect(() => {
    localStorage.setItem("dashboard-brand", JSON.stringify(brand));
  }, [brand]);

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}