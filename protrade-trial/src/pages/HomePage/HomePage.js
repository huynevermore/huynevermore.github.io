import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState, createContext } from "react";
export const UserContext = createContext();
function HomePage() {
  const [isSuccess, setIsSuccess] = useState({ show: false, success: 0 });
  const [decode, setDecode] = useState();

  useEffect(() => {
    const id = setTimeout(() => {
      setIsSuccess({ show: false, success: 0 });
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [isSuccess.show]);

  useEffect(() => {
    let token = localStorage.getItem("auth");
    const decoded = jwt_decode(token);
    setDecode(decoded);
  }, []);



  return (
    <UserContext.Provider value={(setIsSuccess)}>
      <Header decode={decode} />
      <Layout isSuccess={isSuccess} />
      
    </UserContext.Provider>
  );
}

export default HomePage;
