import { Routes, Route } from "react-router-dom";
import Layout from "../app/Layout";
import Home from "../page/Home";

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
