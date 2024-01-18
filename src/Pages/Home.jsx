import React from "react";
import { useNavigate } from "react-router-dom";
import withAuthentication from "../HOC/WithAuth";

const Home = ({ logout }) => {
  const navigate = useNavigate();
  //   const navigate = useNavigate();
  //   const Logout = () => {
  //     localStorage.removeItem("userToken");
  //     const userToken = localStorage.getItem("userToken");
  //     console.log("hasil token", userToken);
  //     navigate("/home");
  //   };

  return (
    <div>
      <p>ini Home</p>
      <button onClick={logout}>logout</button>
      <button onClick={() => navigate("/pages")}>Pages</button>
    </div>
  );
};

export default withAuthentication(Home);
