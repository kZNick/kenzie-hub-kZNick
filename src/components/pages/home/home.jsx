import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/contexsUser";
import { HomeContainer, MainHerder, MainHome, Techs } from "../../Styles/home";
import { Header } from "./header";
import imgButton from "../../../assets/+.png";
import { TechsList } from "./techs";
import { ModalHome, ModalTechs } from "./modal";
import { Loading } from "../../loading";




export const Home = () => {
  const { apiHub, techsList,modalOn,setModalOn,loadin,modalTechsOn} = useContext(UserContext);

  return (
    <HomeContainer>
      {loadin ? (<Loading/>): null}
      {modalOn ? (<ModalHome/>): null}
      {modalTechsOn ? (<ModalTechs/>): null}
      <Header />
      <MainHerder>
        <div className="inforHome">
          <h2>Olá, {apiHub.name}</h2>
          <span>{apiHub.course_module}</span>
        </div>
      </MainHerder>
      <MainHome>
        <div className="HeaderMain">
          <h3>Tecnologias</h3>
          <button onClick={()=>setModalOn(!modalOn)}>
            <img src={imgButton} alt="" />
          </button>
        </div>
        <Techs>
          {techsList.length > 0? (
            <TechsList/>
          ) : (
            <li className="NoTechs">
              <h3>Você não tem Tecnologia Cadastrada ainda</h3>
            </li>
          )}
        </Techs>
      </MainHome>
    </HomeContainer>
  );
};
