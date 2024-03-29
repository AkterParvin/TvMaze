import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { newUser, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <span className="loading loading-bars w-28 bg-red-700 absolute top-[50%] right-[50%]"></span>

    }
    if (newUser) {
        return children;
    }
    return (

        < Navigate state={location.pathname} to="/login" ></Navigate >

    )
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateRoute;