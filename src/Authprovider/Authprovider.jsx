import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { auth } from "../firebase_auth/firebase";

const Authprovider = ({children}) => {
    const [user,SetUser]=useState()
    // this is register method 
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // this is login method 
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // this is observe method 
    useEffect(()=>{
        const UserObserver=onAuthStateChanged(auth, currentUser => {

            console.log("আমি কিন্ত নজর রাগতেসি ",currentUser)
            SetUser(currentUser)
        })

        return ()=>{
            UserObserver()
        }
    },[])
 
    const handleSignOutmethod=()=>{
        return signOut(auth)
    }

    const value={
        register,
        login,
        user,
        handleSignOutmethod

        
     }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;