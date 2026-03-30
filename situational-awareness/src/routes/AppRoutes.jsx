// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ModuleOne from "../pages/ModuleOne";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/module-one" element={<ModuleOne />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}