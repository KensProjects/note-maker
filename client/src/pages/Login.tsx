import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../config/base_url";
import Spinner from "../components/Spinner";
import AuthForm from "../components/AuthForm";

export default function Login() {

  const navigate = useNavigate();
  
  interface IUserInfo {
    username: String;
    password: String;
  }

  const [user, setUser] = useState<IUserInfo>({
    username: "",
    password: "",
  });

  
  const [error, setError] = useState("")

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    try {
      e.preventDefault();
      await axios.post(
        `${BASE_URL}/login`,
        {
          username: `${user.username}`,
          password: `${user.password}`,
        },
        { withCredentials: true }
      );
      setIsLoading(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setError("Login failed!")
      setTimeout(()=> {
        setError("")
      }, 1000)
    }
  }
  if (isLoading) return <Spinner />;

  return (
    <>
      <AuthForm
        type="Login"
        onSubmit={handleLogin}
        onUsernameChange={(e: any) =>
          setUser({ ...user, username: e.target.value })
        }
        onPasswordChange={(e: any) =>
          setUser({ ...user, password: e.target.value })
        }
        username={`${user.username}`}
        password={`${user.password}`}
        error={error}
      />
    </>
  );
}
