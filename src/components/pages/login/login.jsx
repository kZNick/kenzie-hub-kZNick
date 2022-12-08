import React from "react";
import Logo from "../../../assets/Logo.svg";
import { Main } from "../../Styles/mainsForm";
import { LoginForm } from "./formLogin";

export const Login = () => {
  return (
    <Main>
      <img src={Logo} alt="" />
      <LoginForm></LoginForm>
    </Main>
  );
};
