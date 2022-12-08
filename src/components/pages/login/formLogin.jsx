import React, { useState } from "react";
import { Form } from "../../Styles/form";
import { Inpult } from "../../Styles/inpults";
import { Label } from "../../Styles/label";
import { ButtonLogin, ButtonRegister } from "../../Styles/buttons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../../services/api";

export const LoginForm = () => {


  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleSubmitFunction = async (datas) => {
     
    try {
      setLoading(true);
      const response = await apiKenzieHub.post("sessions",datas);
      toast.success('Login feito com Sucesso', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        localStorage.setItem("HubTokenUser",response.data.token)
        navigate("/home")
    } catch (error) {
      console.log(error);
      toast.error('Email invalido ou senha invalida', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }finally {
      setLoading(false);
  }
  };


  
  return (
    <Form onSubmit={handleSubmit(handleSubmitFunction)}>
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
      <ButtonLogin type="submit">{loading?("carregando"):("Entrar")}</ButtonLogin>
      <span>Ainda não possui uma conta?</span>
      <ButtonRegister onClick={() => navigate("/register")}>
        Cadastre-se
      </ButtonRegister>
    </Form>
  );
};
