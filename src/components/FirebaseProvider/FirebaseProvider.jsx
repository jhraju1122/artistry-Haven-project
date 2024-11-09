import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
 import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
// import AuthProvider from '../../AuthProvides/AuthProvider';
 export const AuthContext = createContext(null);
 // social auth provider----
const googleProvider = new GoogleAuthProvider();

 
const FirebaseProvider = ({children}) => {
     
    const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
    // create user
     const createUser = (email, password) => {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)

     }

    // google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
        
  .then((result) => {
    // Handle the successful login here
  })
  

    }

    // manage user
    useEffect(() =>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
           setUser(currentUser)
           setLoading(false)
            
        });
        return unSubscribe()
    }, []);

    const logInUser = (email, password) =>{
        setLoading(true)
        return
        signInWithEmailAndPassword(auth, email, password)
    }

    // logged out
    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const allValues = {
       
        createUser,
        loading,
        googleLogin,
        logInUser,
        logOutUser,
        user
    }



     return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

// AuthProvider.propTypes = {
//     children: PropTypes,node,
// }
export default FirebaseProvider;