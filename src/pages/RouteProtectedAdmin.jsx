import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/userContext";

function RouteProtectedAdmin() {
    const { user } = useContext(UserContext);
    return (user.usuario && user.role === 2 ? <Outlet /> : <Navigate to="/" />);
}

export default RouteProtectedAdmin;
