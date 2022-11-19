import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ResponsiveAppBar from "../AppBar";
import Feedback from "./Dashboard_screens/Feedback";
import Message from "./Dashboard_screens/Message";
import Notification from "./Dashboard_screens/Notification";

function Dashboard() {
  return (
    <>
      <ResponsiveAppBar />

      <div className="main mt-5" style={{ border:'1px solid green', display:'flex'}}>
        <div className="left" style={{ width: "15%", height:'80vh', border: "1px solid red" }}>
          <h1>Left Side</h1>
          <ul></ul>
        </div>

        <div className="right" style={{ width: "85%", height:'80vh', border: "1px solid black" }}>
          <h1>Right Side</h1>
        </div>
      </div>

      <Link to="feedback">Feedback</Link>
      <Link to="message">Message</Link>
      <Link to="notification">Notification</Link>

      <Routes>
        <Route path="feedback" element={<Feedback />} />
        <Route path="message" element={<Message />} />
        <Route path="notification" element={<Notification />} />
      </Routes>
    </>
  );
}

export default Dashboard;
