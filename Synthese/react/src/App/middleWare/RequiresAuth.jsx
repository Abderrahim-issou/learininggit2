import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth"



const CheckAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return(
        console.log(auth),
        auth?.accessToken ? <Outlet/>
            :<Navigate to='/login' state = {{from: location.pathname}}/>

    )
}

export default CheckAuth;