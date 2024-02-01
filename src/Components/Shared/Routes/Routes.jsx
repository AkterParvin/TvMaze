import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import MovieSummary from "../Movies/MovieSummary";

const Routes = createBrowserRouter([
    {
        path: "/",
        // errorElement: <Error />,
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/movieSummary/:id',
                element: <MovieSummary />,
                // loader: ({ params }) => fetch(`https://tidy-cleaning-server.vercel.app/services/${params.id}`)
            }
            // ,
            // {
            //     path: '/allservices',
            //     element: <AllServices />
            // },
           
            // {
            //     path: '/add-service',
            //     element: <PrivateRoute> <AddService /></PrivateRoute>

            // },

          
        ]
    },
  
    {
        // path: '/login',
        // element: <Login />
    },

    {
        // path: '/register',
        // element: <Register />
    },
]);

export default Routes;