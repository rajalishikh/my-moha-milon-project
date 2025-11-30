import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../AuthContext/AuthContext";
import { auth } from "../firebase_auth/firebase";

const Authprovider = ({children}) => {
    console.log(children)
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const value={
        register,
        login
        
     }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;