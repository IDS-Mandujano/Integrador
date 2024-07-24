import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/userContext";

function RouteProtectedAlumno() {
    const { user } = useContext(UserContext);
    return (user.usuario && user.role === 1 ? <Outlet /> : <Navigate to="/" />);
}

export default RouteProtectedAlumno;
