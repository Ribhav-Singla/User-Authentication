/* eslint-disable no-unused-vars */
import React from "react";
import LoginSignup from "./components/loginSignup/LoginSignup";
import Logo from "./Logo";
import BottomLogo from "./BottomLogo";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="top--logo">
        <Logo width={500} height={500} />
      </div>
      <div className="center--logo">
        <Logo width={500} height={500} />
      </div>
      <div className="bottom--logo">
        <BottomLogo width={500} height={500} />
      </div>
      <img src="./hamBurger.png" className="hamBurger--menu cursor-pointer" />
      <div className="login-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/forgotPassword" element={<ForgotPassword/>} />
          </Routes>
        </BrowserRouter>
        {/* <ForgotPassword/> */}
      </div>
    </>
  );
}

export default App;
