import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";

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
            // {
            //     path: 'services',
            //     element: <Services />
            // }
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