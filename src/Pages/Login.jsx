import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const id = "mike";
  const pass = "mike28";

  const Login = (e) => {
    e.preventDefault();

    console.log("Masuk");
    if (username == id && password == pass) {
      localStorage.setItem("userToken", "true");
      navigate("/home");
    }
  };
  return (
    <div>
      <form onSubmit={Login}>
        <p>username</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <p>password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
