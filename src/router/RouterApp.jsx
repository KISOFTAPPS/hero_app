import { Routes, Route } from "react-router-dom";
import Login from "../auth/pages/Login";
import Dc from "../heroes/pages/Dc";
import Marvel from "../heroes/pages/Marvel";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import Navbar from "../ui/components/Navbar";

const Error401 = () => {
    return (
        <>
            <h1>401</h1>
        </>
    );
};

const RouterApp = () => {
    return (
        <Routes>
            <Route path="*" element={<HeroesRoutes />} />
            <Route path="login" element={<Login />} />
        </Routes>
    );
};

export default RouterApp;
