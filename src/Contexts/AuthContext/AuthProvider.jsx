import { createContext, useState } from "react";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const [users,setUsers]=useState('')
    

const LoginUser = (user)=>{
    setUsers(user)
}

const Logout = ()=>{
    setUsers(null)
}
    const authInfo={
        users,
        LoginUser,
        Logout
       
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;