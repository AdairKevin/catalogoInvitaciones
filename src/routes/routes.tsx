import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.tsx";
import Catalogo from "../pages/catalogo/catalogo.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalogo />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
