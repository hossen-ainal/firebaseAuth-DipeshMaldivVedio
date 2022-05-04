import { createContext } from "react";

import{ 

   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged

 } from "firebase/auth";

 import {auth} from "../mycomponents/Firebase";

const userAuthContext = createContext();


export function UserAuthContextProvider({children}){

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    return <UserAuthContextProvider value={}>{children}</UserAuthContextProvider>
}

export function useUserAuth(){
    return  useContext(userAuthContext);
}