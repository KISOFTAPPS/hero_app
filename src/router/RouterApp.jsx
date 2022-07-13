import { Routes, Route } from "react-router-dom";
import Login from "../auth/pages/Login";
import Dc from "../heroes/pages/Dc";
import Marvel from "../heroes/pages/Marvel";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import Navbar from "../ui/components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const RouterApp = () => {
    return (
        <Routes>
            <Route
                path="login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="*"
                element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default RouterApp;
