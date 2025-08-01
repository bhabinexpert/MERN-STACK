import { Navigate } from "react-router-dom";
import Unauthorized from "./unAuthorized";
export default  function ProtectedRoute({children, allowedRoles = []}){
    const token = localStorage.getItem("token")
    const userRaw = localStorage.getItem("user")
    const user = userRaw ? JSON.parse(userRaw) : null
    console.log(user)

    
    if(!token || !user){
        return <Navigate to = "/" />
    
    }
    if(allowedRoles.length > 0 && !allowedRoles.includes(user.userType)){
        return <Unauthorized />
    }


    return children
}

