import React from 'react';
import { useContext } from "react";
// import { AuthContext } from "../components/providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
 
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const PrivateRoute = ({children}) => {
    
    const { user }= useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(!user){
        return <Navigate to='/login' state={location.pathname ?.pathname || '/'}>
          
        </Navigate>
    }
    if(user){
        return  children;
    }
    
    return  <Navigate to="/login"></Navigate>
    };

    PrivateRoute.propTypes = {}

     

export default PrivateRoute;


 