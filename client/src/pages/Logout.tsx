import { useNavigate } from "react-router-dom";
import LogoutPopup from "../components/LogoutPopup";
import axios from "axios";
import { BASE_URL } from "../config/base_url";
import { useState } from "react";

export default function Logout() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  function logout() {
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .get(`${BASE_URL}/logout`, {
        signal,
        withCredentials: true,
      })
      .then(() => navigate("/login"))
      .catch(() => {
        setError("User not logged in! Logout failed!");
        setTimeout(() => navigate("/login"), 1000);

        return () => {
          controller.abort();
        };
      });
  }

  function logoutCancel() {
    navigate("/");
  }

  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center">
      <LogoutPopup
        acceptClick={logout}
        declineClick={logoutCancel}
        error={error}
      />
    </div>
  );
}
