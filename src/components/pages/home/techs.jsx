import React, { useContext } from "react";
import { UserContext } from "../../Contexts/contexsUser";
import { ListTechs } from "../../Styles/home";
import trash from "../../../assets/Vector.svg"

export const TechsList = ()=>{

    const { techsList, deleteTechs } = useContext(UserContext);
    
    return(
        <>
            {techsList.map((element, index) =>{

                return(
                    <ListTechs key={index}>
                    <h2>{element.title}</h2>
                    <div className="buttonDelet">
                        <span>{element.status}</span>
                        <button onClick={()=>deleteTechs(element.id)}><img src={trash} alt="" /></button>
                    </div>
                </ListTechs>
                )
            })}
        </>
    )
}