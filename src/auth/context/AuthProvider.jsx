import React, { useId, useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//     logged: false,
//     user: {
//         id: null,
//         name: null,
//     },
// };

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: !!user,
        user: user || {
            id: null,
            name: null,
        },
    };
};

const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = "") => {
        let id = uuidv4();
        const user = { id: id, name };

        const action = {
            type: types.login,
            payload: user,
        };

        localStorage.setItem("user", JSON.stringify(user));
        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({ type: types.logout });
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
