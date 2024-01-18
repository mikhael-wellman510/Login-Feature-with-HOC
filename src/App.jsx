import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

import Pages from "./Pages/Pages";
import Count from "./Pages/Count";

// const AuthenticatedHome = withAuthentcation(Home);
// const AuthenticatedPages = withAuthentcation(Pages);
// const AuthenticatedCount = withAuthentcation(Count);
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/count" element={<Count />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
