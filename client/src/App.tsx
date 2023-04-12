import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";

import CookieChecker from "./components/CookieChecker";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="w-screen h-screen relative">
        <Navbar />
        <CookieChecker />
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/logout"} element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}
