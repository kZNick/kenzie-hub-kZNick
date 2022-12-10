import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ()=>{

    const token = localStorage.getItem("HubTokenUser")
    const headerApi = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const navigate = useNavigate();

    const [apiHub, setApiHub] = useState([])
    const [techsList, setTechsList] = useState([])
    const[modalOn, setModalOn] = useState(false)
    const[modalLodin, setModalLodin] = useState(false)
    const [loadin, setLoadin] = useState(true)
    const [animetion,setAnimetion] = useState(false)

    useEffect(() => {
        const user = async () => {
          try {
            const api = await axios.get("https://kenziehub.herokuapp.com/profile", {
              headers: { Authorization:`Bearer ${token}` },
            });
            setApiHub(api.data);
            setTechsList(api.data.techs)
          } catch (error) {
            console.log(error);
          }finally{
            setLoadin(false)
          }
        };
    
        if (!token) {
            localStorage.clear();
            navigate("/")
          }
        user();
      }, []);


      //Add Techs
      const techsFunction = async (data)=>{
        

        try {
          setLoadin(true)
          setModalLodin(true)
          const addTechs = await apiKenzieHub.post("users/techs",data,headerApi);
          toast.success('Tecnologia Criada', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } catch (error) {
          console.log(error)
          toast.error('Algo deu errado', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }finally{
          setLoadin(false)
          setModalLodin(false)
          setModalOn(!modalOn)
          const ListTechs = await apiKenzieHub.get("profile",headerApi);
          setTechsList(ListTechs.data.techs)
        }
    }

    //Delete Tech

    const deleteTechs = async (idTech)=>{
      
      try {
        setLoadin(true)
        const response = await apiKenzieHub.delete(`users/techs/${idTech}`,headerApi);
        toast.success('Tecnologia Deletada', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } catch (error) {
        console.log(error)
        toast.error('Algo deu errado', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }finally{
        setLoadin(false)
        const ListTechs = await apiKenzieHub.get("profile",headerApi);
        setTechsList(ListTechs.data.techs)
      }
    }
    console.log(animetion)
    return (

        <UserContext.Provider value={{apiHub, setApiHub, navigate,techsList,modalOn,setModalOn,techsFunction,modalLodin,deleteTechs,loadin, setLoadin,animetion,setAnimetion}}>
            <Outlet/>
        </UserContext.Provider>
    )

}