import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";

export const RoutingPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
