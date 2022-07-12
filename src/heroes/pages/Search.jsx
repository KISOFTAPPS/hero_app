import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import queryString from "query-string";
import HeroCard from "../components/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroByName } from "../helpers/getHeroByName";

const SignupSchema = Yup.object().shape({
    heroe: Yup.string().max(20, "Muy largo").required("Dato requerido"),
});

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);
    const heroes = getHeroByName(q);

    const showSearch = q.length === 0;
    const showError = !showSearch && heroes.length === 0;

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <Formik
                        initialValues={{
                            heroe: q,
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            navigate(`?q=${values.heroe.toLowerCase().trim()}`);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field
                                    type="text"
                                    name="heroe"
                                    placeholder="Buscar a tu heroe"
                                    className="form-control"
                                    autoComplete="off"
                                />
                                {errors.heroe && touched.heroe ? (
                                    <div>{errors.heroe}</div>
                                ) : null}

                                <button
                                    className="btn btn-outline-success mt-1"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                    <div
                        className="alert alert-success animate__animated animate__fadeIn"
                        style={{ display: !showSearch && "none" }}
                    >
                        Buscar heroe
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: !showError && "none" }}
                    >
                        No hay resultados en la busqueda de <b>{q}</b>
                    </div>

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;
