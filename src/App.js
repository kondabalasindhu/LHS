import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Aboutus from "./components/AboutUs/Aboutus";
import List from "./components/List/List";
import Service from "./components/Service/Service";
import Location from "./components/Location/Location";
import Contact  from "./components/Contact/Contact";


import ForgetPassword from "./Authontication/ForgetPassword";
import ResetPassword from "./Authontication/ResetPassword";
import Admin from "./components/Admin/Admin";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import UserDetails from "./components/UserDetails/UserDetails";
import AddNurse from "./components/AddNurse/AddNurse";
import AddPharmacist from "./components/AddPharmacist/AddPharmacist";
import AddReceptionist from "./components/AddReceptionist/AddReceptionist";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/Reset-password" element={<ResetPassword />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/List" element={<List />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/AddNurse" element={<AddNurse />} />
        <Route path="/AddPharmacist" element={<AddPharmacist />} />
        <Route path="AddReceptionist" element={<AddReceptionist/>} />


      </Routes>
    </Router>
  );
}
export default App;
