import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/Firebase.config';
import { toast } from 'react-hot-toast';

export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [sidebar, setSidebar] = useState(false)
    const [products, setProducts] = useState([])

    const googleProvider = new GoogleAuthProvider();

    const googleSiginIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const loginUserManualy = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {

        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const logout = () => {
        toast.success("logout")
        signOut(auth).then(result => { }).catch(err => console.log(err.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoginUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        loginUser, setLoginUser, loading, setLoading,
        googleSiginIn,
        logout,
        loginUserManualy,
        createUser,
        profileUpdate,
        sidebar,
        setSidebar,
        products,
        setProducts,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;