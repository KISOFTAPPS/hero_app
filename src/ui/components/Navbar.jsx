import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const userName = user.name;

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        let user = localStorage.getItem("user");
        if (user) {
            logout();
        }
        
        navigate("login", { replace: true });
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ zIndex: "1" }}
        >
            <div className="container-fluid">
                <b className="navbar-brand">Empresas</b>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-item nav-link" to="marvel">
                            Marvel
                        </NavLink>

                        <NavLink className="nav-item nav-link" to="dc">
                            DC
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="search">
                            Search
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="heroes">
                            Heroes
                        </NavLink>
                    </div>
                    <span className="navbar-text me-3 text-success">
                        {userName}
                    </span>
                    <button
                        className={`btn btn-outline-${
                            userName ? "danger" : "success"
                        }`}
                        onClick={handleLogout}
                    >
                        {userName ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
