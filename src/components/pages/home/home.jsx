import axios, { Axios } from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HomeContainer, MainHome } from "../../Styles/home";
import { Header } from "./header";

export const Home = () => {

    const navigate = useNavigate();

  const token = localStorage.getItem("HubTokenUser") || "noToken";




  const [apiHub, setApiHub] = useState([]);

  useEffect(() => {
    const user = async () => {
      try {
        const api = await axios.get("https://kenziehub.herokuapp.com/profile", {
          headers: { Authorization: "Bearer ".concat(token) },
        });
        setApiHub(api.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (token === "noToken") {
        localStorage.clear();
        navigate("/")
      }
    user();
  }, []);


  console.log(apiHub);
  return (
    <HomeContainer>
      <Header />
      <MainHome>
        <div className="inforHome">
          <h2>Olá, {apiHub.name}</h2>
          <span>{apiHub.course_module}</span>
        </div>
      </MainHome>
      <h3>Que pena! Estamos em desenvolvimento :(</h3>
      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
    </HomeContainer>
  );
};
