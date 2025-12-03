import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { auth } from "../firebase_auth/firebase";

const Authprovider = ({children}) => {
    const [user,SetUser]=useState()
    
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const UserObserver=onAuthStateChanged(auth, currentUser => {

            console.log("আমি কিন্ত নজর রাগতেসি ",currentUser)
            SetUser(currentUser)
        })

        return ()=>{
            UserObserver()
        }
    },[])


    const value={
        register,
        login,
        user

        
     }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;