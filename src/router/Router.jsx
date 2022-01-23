import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Racing from "../pages/Racing";
import Store from "../pages/Store";
import CarView from "../components/Product/CarView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/:slug" element={<CarView />} />
      <Route path="/racing" element={<Racing />} />
    </Routes>
  );
};

export default Router;
