import React from "react";
import withAuthentication from "../HOC/WithAuth";
import { useNavigate } from "react-router-dom";

const Pages = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/count")}></button>
    </div>
  );
};

export default withAuthentication(Pages);
