import React, { useContext } from "react";
import { Form } from "../../Styles/form";
import { Inpult } from "../../Styles/inpults";
import { Label } from "../../Styles/label";
import { ButtonLogin, ButtonRegister } from "../../Styles/buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterLoginCotexts } from "../../Contexts/contexsLoginRegister";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const { handleSubmitLogin, loading, logged } = useContext(RegisterLoginCotexts);

  
  if(logged){
    navigate("/home")
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  
  return (
    <Form onSubmit={handleSubmit(handleSubmitLogin)}>
      <div className="hederForm">
        <h2>Login</h2>
      </div>
      <div className="divForm">
        <Label htmlFor="email">Email</Label>
        <Inpult
          type={"email"}
          placeholder="Email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="divForm">
        <Label htmlFor="password">Senha</Label>
        <Inpult
          type={"password"}
          placeholder="Senha"
          id="password"
          {...register("password")}
        />
      </div>
      <ButtonLogin type="submit">
        {loading ? "carregando" : "Entrar"}
      </ButtonLogin>
      <span>Ainda não possui uma conta?</span>
      <ButtonRegister onClick={() => navigate("/register")}>
        Cadastre-se
      </ButtonRegister>
    </Form>
  );
};
