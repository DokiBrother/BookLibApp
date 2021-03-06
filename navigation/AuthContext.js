import React from "react";
import { createContext } from "react";
import auth  from "@react-native-firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null);

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch(e) {
                        console.log(e);
                    }
                },
                signUp: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch(e) {
                        console.log(e);
                    }
                },
                logOut: async() => {
                    try {
                        await auth().signOut();
                    } catch(e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}