import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Contexts/contexsUser";
import { ButtonLogin, DeleteButton } from "../../Styles/buttons";
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
  } = useContext(UserContext);

  const { register, handleSubmit } = useForm({});


  return (
    <Modaldiv>
      <div className={`registerThechs ${animetion ? "modalExite" : null}`}>
        <div className="modalHeader">
          <span>Cadastrar Tecnologia</span>
          <button
            onClick={() => setModalOn(!modalOn)}
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







export const ModalTechs = () => {
  const {
    modalLodin,
    animetion,
    modalTechsOn,
    SetModalTechsOn,
    deleteTechs,
    alterTechs,
    nameTechs
  } = useContext(UserContext);

  const { register, handleSubmit,} = useForm({});


  return (
    <Modaldiv>
      <div className={`registerThechs ${animetion ? "modalExite" : null}`}>
        <div className="modalHeader">
          <span>Tecnologia Detalhes</span>
          <button
            onClick={() => SetModalTechsOn(!modalTechsOn)}
          >
            x
          </button>
        </div>
        <form className="FormThecs" onSubmit={handleSubmit(alterTechs)}>
          <Label htmlFor="title">Nome do projeto</Label>
          <Inpult
            type="text"
            placeholder="Tecnologia"
            id="title"
            disabled
            value={nameTechs}
            {...register("title")}
          />
          <Label htmlFor="status">Selecionar status</Label>
          <Select id="status" {...register("status")}>
            <option value={"Inciante"}>Inciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </Select>
          <div className="buttons">
          <ButtonLogin type="submit">
            {modalLodin ? "Carregando" : "Salvar alterações"}
          </ButtonLogin>
          <DeleteButton type="button" onClick={()=>deleteTechs()}>
            {modalLodin ? "Carregando" : "Excluir"}
          </DeleteButton>
          </div>
        </form>
      </div>
    </Modaldiv>
  );
};