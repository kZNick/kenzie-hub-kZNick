import React from "react";
import { useForm } from "react-hook-form";
import { RegisterButton } from "../../Styles/buttons";
import { Form } from "../../Styles/form";
import { Inpult, Select } from "../../Styles/inpults";
import { Label } from "../../Styles/label";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { apiKenzieHub } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {

  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    password: yup.string().required("Senha Obrigatório"),
    bio: yup.string().required("Bio Obrigatório"),
    contact: yup.string().required("Contact Obrigatório"),
    course_module: yup.string().required("Módulo Obrigatório")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleSubmitFunction =async (data) => {

    try {
      setLoading(true);
      const response = await apiKenzieHub.post("users",data);
      toast.success('Conta criada com sucesso!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        setTimeout(()=>navigate("/"),2000)
    } catch (error) {
      console.log(error)
      toast.error('Ops! Algo deu errado', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } finally {
      setLoading(false);
  }
    

  };
  return (
    <Form onSubmit={handleSubmit(handleSubmitFunction)}>
      <div className="hederForm">
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      </div>
      <div className="divForm">
        <Label htmlFor="nome">Nome</Label>
        <Inpult type={"text"} placeholder="Digite aqui seu nome" id="nome" {...register("name")} />
        {errors.name?.message}
      </div>
      <div className="divForm">
        <Label htmlFor="email">Email</Label>
        <Inpult type={"email"} placeholder="Digite aqui seu email" id="email" {...register("email")}  />
        {errors.email?.message}
      </div>
      <div className="divForm">
        <Label htmlFor="senha">Senha</Label>
        <Inpult
          type={"password"}
          placeholder="Digite aqui sua senha"
          id="senha"
          {...register("password")} />
          {errors.password?.message}
      </div>
      <div className="divForm">
        <Label htmlFor="confirmSenha">Confirmar Senha</Label>
        <Inpult
          type={"password"}
          placeholder="Digite novamente sua senha"
          id="confirmSenha"
          {...register("password")} />
          {errors.password?.message}
      </div>
      <div className="divForm">
        <Label htmlFor="bio">Bio</Label>
        <Inpult type={"text"} placeholder="Fale sobre você" id="bio" {...register("bio")}  />
        {errors.bio?.message}
      </div>
      <div className="divForm">
        <Label htmlFor="contato">Contato</Label>
        <Inpult type={"text"} placeholder="Opção de contato" id="contato"  {...register("contact")} />
        {errors.contact?.message}
      </div>
      <div className="divForm">
        <Label htmlFor="modulo">Selecionar módulo</Label>
        <Select id="modulo" {...register("course_module")} >
        {errors.course_module?.message}
          <option disabled>Selecione seu Modulo</option>
          <option value={"Primeiro Módulo"}>Primeiro Módulo</option>
          <option value={"Segundo Módulo"}>Segundo Módulo</option>
          <option value={"Terceiro Módulo"}>Terceiro Módulo</option>
          <option value={"Quardo Módulo"}>Quardo Módulo</option>
          <option value={"Quinto Módulo"}>Quinto Módulo</option>
        </Select>
      </div>
      <RegisterButton>{loading?("carregando"):("Cadastrar")}</RegisterButton>
    </Form>
  );
};
