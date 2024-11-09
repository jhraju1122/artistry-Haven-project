import { useContext } from "react";
import { AuthContext } from "../components/providers/Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { getAuth } from "firebase/auth";
 import { app } from "../firebase/firebase.config";
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const { user, loading }= useContext(AuthContext);

    if(loading){
        return <span class="loading loading-spinner loading-lg"></span>
    }

    return <Navigate to="/login"></Navigate>;
};

export default AuthProvider;

PrivateRoute.PropTypes = {
    children: PropTypes.node
}