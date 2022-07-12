import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import RouterApp from "./router/RouterApp";
import AuthProvider from "./auth/context/AuthProvider";

const App = () => {
    return (
        <>
            <AuthProvider>
                <RouterApp />
            </AuthProvider>
        </>
    );
};

export default App;
