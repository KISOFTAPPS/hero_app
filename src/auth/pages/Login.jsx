import React, { useContext } from "react";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const {login} = useContext(AuthContext); 
    const navigate = useNavigate()

    const handleLogin = () => {
        
        login("Karim Sabag")

        navigate("/", { replace: true })
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-outline-success" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
