import axios from "axios"

export const apiKenzieHub = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 8000
})