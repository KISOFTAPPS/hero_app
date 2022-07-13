import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

const PrivateRoute = ({ children }) => {


    
    const { logged } = useContext(AuthContext);
    const {pathname, seaarch} = useLocation();

    const lastPath = pathname + seaarch;
    localStorage.setItem("lastPath", lastPath);
    console.log(lastPath);

    return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
