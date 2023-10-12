import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
// import AboutandSessions from "../Pages/AboutandSessions";
import TabComponent from "../Components/Tab/Sessions";
import { AboutandSessions } from "../Pages/AboutandSessions";
import Login from "../Pages/LoginPage";

export const RoutingPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="About" element={<TabComponent />} />
        <Route path="sessions" element={<AboutandSessions />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
