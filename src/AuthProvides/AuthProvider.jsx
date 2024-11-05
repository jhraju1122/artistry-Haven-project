import { useContext } from "react";
import { AuthContext } from "../components/providers/Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

 
const PrivateRoute = ({children}) => {
    const { user, loading }= useContext(AuthContext);

    if(loading){
        return <span class="loading loading-spinner loading-lg"></span>
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.PropTypes = {
    children: PropTypes.node
}