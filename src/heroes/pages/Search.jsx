import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import queryString from "query-string";
import HeroCard from "../components/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroByName } from "../helpers/getHeroByName";

const SignupSchema = Yup.object().shape({
    heroe: Yup.string()
        .min(2, "Muy corto")
        .max(20, "Muy largo")
        .required("Dato requerido"),
});

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);

    const heroes = getHeroByName(q);

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
                    <div className="alert alert-success">Buscar heroe</div>

                    {heroes.length === 0 && (
                        <div className="alert alert-danger">
                            No hay resultados en la busqueda de <b>{q}</b>
                        </div>
                    )}

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;
