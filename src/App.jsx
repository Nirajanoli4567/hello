import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/landing/Landing";
import CareCenter from "./components/landing/CareCenter";

import SignIn from "./log/SignIn";
import SignUp from "./log/SignUp";
import DocLog from "./log/DocLog";
import Admin from "./log/Admin";
import Pharma from "./log/Pharma";

// import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import About from "./components/landing/About";
import Dashboard from "./components/admindashboard/Dashboard";
import Appoinment from "./components/admindashboard/Appoinment";
import Users from "./components/admindashboard/Users";
import Ambulance from "./components/admindashboard/Ambulance";
import Billing from "./components/admindashboard/Billing";
import Email from "./components/admindashboard/Email";
import Messages from "./components/admindashboard/Message";
import Setting from "./components/admindashboard/Setting";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/docsignup" element={<DocLog />} />
          <Route path="/adminsignup" element={<Admin />} />
          <Route path="/pharmasignup" element={<Pharma />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appoinment />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/email" element={<Email />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="/carecenter" element={<CareCenter />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
