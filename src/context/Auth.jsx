import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        ok:false,
        user:null,
        token:"",
        refreshToken:"",
    })
    useEffect(() => {
       const userAuth = JSON.parse(localStorage.getItem("auth"))
       userAuth && setAuth(userAuth)
    }, [])
return(
    <AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
)
}



export const useAuth = () => useContext(AuthContext)

export default AuthProvider 