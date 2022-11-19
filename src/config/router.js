import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import NotFound from "../screens/NotFound";
import Dashboard from "../screens/Dashboard";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
