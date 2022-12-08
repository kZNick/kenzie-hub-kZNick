import React from "react";
import { NotFoundDiv } from "../Styles/notfound";
import NotFoundGif  from "../../assets/404.gif";

export const NotFound = ()=>{
    return(
        
        <NotFoundDiv>
            <img src={NotFoundGif} alt="" />
        </NotFoundDiv>

    )
}