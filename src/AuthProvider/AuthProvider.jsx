import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    // create user
     const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser =(email, password) =>{
        return signInWithEmailAndPassword (auth, email, password)
    }
  const  authInfo = {
  createUser,
  loginUser

  }
    return (

        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;