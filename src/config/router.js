import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screens/admin";
import Login from "../screens/login";
// import NotFound from "../screens/NotFound";
import Signup from "../screens/signup";


function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/*" element={<Admin />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard/*" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
