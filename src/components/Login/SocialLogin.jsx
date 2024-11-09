import React from 'react';
import useAuth from '../../hooks/useAuth';
 import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const {googleLogin} = useAuth()
    return (
        <div>
             <button onClick={() =>googleLogin()}
              className='btn'> <FcGoogle className='text-xl'></FcGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;