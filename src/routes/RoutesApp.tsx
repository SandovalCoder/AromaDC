import { Routes, Route } from "react-router-dom";
import Layout from "../app/Layout";
import Home from "../page/Home";
import Nosostros from "@/page/Nosostros";
import Products from "@/components/Products";

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosostros" element={<Nosostros />} />
        <Route path="/productos" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
