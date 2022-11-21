import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screens/admin";
import Main from "../screens/main";
import Login from "../screens/login";
// import NotFound from "../screens/NotFound";
import Signup from "../screens/signup";
import User from "../screens/user";
import UserForm from "../screens/userForm";


function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Main />} />
          <Route path="userForm" element={<UserForm />} />
          <Route path="admin/:id/*" element={<Admin />} />
          <Route path="user/:id/*" element={<User />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
