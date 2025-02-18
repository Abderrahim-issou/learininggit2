import { useContext } from "react"
import authContext from "./authContext"



const useAuth = () => {
    return useContext(authContext);
}

export default useAuth;