import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

const Hero = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const hero = useMemo(()=> getHeroById(id), [id]);

    if (!hero) {
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeInDown">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b>
                        {hero.first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3"> Character </h5>
                <p>{hero.characters}</p>

                <button className="btn btn-outline-danger" onClick={() => navigate(-1)}>
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default Hero;
