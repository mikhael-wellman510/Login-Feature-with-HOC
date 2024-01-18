import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuthentication = () => {
        const userToken = localStorage.getItem("userToken");
        console.log("hasil tokenss", userToken);

        if (userToken === "true") {
          console.log("Masuk cuyy");

          // Modif , akan logout selama 10 detik
          setTimeout(() => {
            navigate("/login");
            localStorage.removeItem("userToken");
          }, 10000);
        } else {
          navigate("/login");
        }
      };

      checkAuthentication(); // Panggil di sini untuk memeriksa otentikasi saat komponen pertama kali di-render
    }, [navigate]); // Tambahkan dependensi kosong agar hanya dijalankan sekali

    // Logout
    const logout = () => {
      localStorage.removeItem("userToken");
      setAuth(false);
      navigate("/login");
    };

    return <WrappedComponent {...props} logout={logout} />;
  };
};

export default withAuthentication;
