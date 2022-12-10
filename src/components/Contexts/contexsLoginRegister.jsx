import { useEffect } from "react";
import { createContext, useState } from "react";
import { Outlet, useNavigate,} from "react-router-dom";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";

export const RegisterLoginCotexts = createContext({});

export const RegisterLoginProvider = ()=>{

    const navigate = useNavigate()

    const token = localStorage.getItem("HubTokenUser")

    const [loading,setLoading] = useState(false)
    const [logged, setLogged] = useState(false)

    useEffect(() => {
      if(token){
        setLogged(true)
      }

    },[])

    const handleSubmitLogin = async (datas) => {
     
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

      const handleSubmitRegister =async (data) => {

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
    
    
    return(
        <RegisterLoginCotexts.Provider value={{handleSubmitLogin,loading,handleSubmitRegister,logged}}>
            <Outlet/>
        </RegisterLoginCotexts.Provider>
    )
}