import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.svg"
import { Main } from "../../Styles/mainsForm";
import { FormRegister } from "./formRegister";


export const Register = ()=>{
    const navigate = useNavigate()

    return(
        <Main>
            <div className="divRegister">
                <img src={Logo} alt="" />
                <button onClick={()=>navigate("/")}>Voltar</button>
            </div>
            <FormRegister/>
        </Main>
    )
}