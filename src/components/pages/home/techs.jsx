import React, { useContext } from "react";
import { UserContext } from "../../Contexts/contexsUser";
import { ListTechs } from "../../Styles/home";

export const TechsList = ()=>{

    const { techsList,modalTechsOn,SetModalTechsOn,setIdTechs,setNameTechs } = useContext(UserContext);
    
    return(
        <>
            {techsList.map((element, index) =>{
                return(
                    <ListTechs key={index} onClick={()=>{SetModalTechsOn(!modalTechsOn)
                        setIdTechs(element.id)
                        setNameTechs(element.title)}}>
                    <h2>{element.title}</h2>
                    <span>{element.status}</span>
                </ListTechs>
                )
            })}
        </>
    )
}