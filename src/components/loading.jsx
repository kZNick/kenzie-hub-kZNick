import React from "react";
import { Modaldiv } from "./Styles/modal";
import loginGif from "../assets/Lodin.gif"

export const Loading = ()=>{

    return(
        <Modaldiv>
            <img src={loginGif} alt="" />
        </Modaldiv>
    )
}