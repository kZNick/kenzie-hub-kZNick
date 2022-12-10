import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Contexts/contexsUser";
import { ButtonLogin } from "../../Styles/buttons";
import { Inpult, Select } from "../../Styles/inpults";
import { Label } from "../../Styles/label";
import { Modaldiv } from "../../Styles/modal";

export const ModalHome = () => {
  const {
    modalOn,
    setModalOn,
    techsFunction,
    modalLodin,
    animetion,
    setAnimetion,
  } = useContext(UserContext);

  const { register, handleSubmit } = useForm({});


  return (
    <Modaldiv>
      <div className={`registerThechs ${animetion ? "modalExite" : null}`}>
        <div className="modalHeader">
          <span>Cadastrar Tecnologia</span>
          <button
            onClick={() => {
              setAnimetion(true);

            }}
          >
            x
          </button>
        </div>
        <form className="FormThecs" onSubmit={handleSubmit(techsFunction)}>
          <Label htmlFor="title">Nome</Label>
          <Inpult
            type="text"
            placeholder="Tecnologia"
            id="title"
            {...register("title")}
          />
          <Label htmlFor="status">Selecionar status</Label>
          <Select id="status" {...register("status")}>
            <option value={"Inciante"}>Inciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </Select>
          <ButtonLogin type="submit">
            {modalLodin ? "Carregando" : "Cadastrar Tecnologia"}
          </ButtonLogin>
        </form>
      </div>
    </Modaldiv>
  );
};
