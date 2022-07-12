import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "../../ui/components/Navbar";
import Dc from "../pages/Dc";
import Heroes from "../pages/Hero";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="container">
                    <Outlet />
                </section>
            </main>
            <footer></footer>
        </>
    );
};

const Error404 = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex flex-row justify-content-center alig-items-center">
                    <h1>404</h1>
                </div>
            </div>
        </>
    );
};

const HeroesRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="marvel" />} />
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<Dc />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero/:id" element={<Heroes />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    );
};

export default HeroesRoutes;
