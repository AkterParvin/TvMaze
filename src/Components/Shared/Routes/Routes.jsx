import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import MovieSummary from "../Movies/MovieSummary";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Routes = createBrowserRouter([
    {
        path: "/",
        // errorElement: <Error />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/movieSummary/:id',
                element: <MovieSummary />,
             
            },
           

        ]
    },

    {
        path: '/login',
        element: <Login/>
    },

    {
        path: '/register',
        element: <Register/>
    },
]);

export default Routes;