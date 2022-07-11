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
            </Routes>
        </>
    );
};

export default HeroesRoutes;
