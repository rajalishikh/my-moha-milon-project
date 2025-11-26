import AuthContext from "../AuthContext/AuthContext";

const Authprovider = ({children}) => {
    console.log(children)
    const value={
        raj:"Teacher"

    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;