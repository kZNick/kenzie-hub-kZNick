import React from "react";
import { HeaderHome } from "../../Styles/header";
import logoHeader from "../../../assets/Logo.png"
import { ButtonExite } from "../../Styles/buttons";
import { useNavigate } from "react-router-dom";

export const Header = ()=>{
    const navigate = useNavigate();

    return(
        <HeaderHome>
            <img src={logoHeader} alt="" />
            <ButtonExite onClick={()=>{localStorage.clear()
            navigate("/")}}>Sair</ButtonExite>
        </HeaderHome>
    )
}