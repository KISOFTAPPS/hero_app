import React from "react";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const handleLigin = () => {
        navigate("/", { replace: true })
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLigin}>Login</button>
        </div>
    );
};

export default Login;
