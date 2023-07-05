import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        // TODO
        setCurrentUser({id:1, name:"Foo Bar", profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"});
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider
            value = {{currentUser, login}} >
             {children}
        </AuthContext.Provider>
    )
}