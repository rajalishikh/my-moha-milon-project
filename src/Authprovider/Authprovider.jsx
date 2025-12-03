import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { auth } from "../firebase_auth/firebase";

const Authprovider = ({children}) => {
    
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const UserObserver=onAuthStateChanged(auth, (user) => {

            console.log("আমি কিন্ত নজর রাগতেসি ",user)
        })

        return ()=>{
            UserObserver()
        }
    },[])


    const value={
        register,
        login,

        
     }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;