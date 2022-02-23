import React, { useEffect, useState } from 'react'
import { auth } from '../index'
import fireBase from "firebase/compat/app";

const SessionContext = React.createContext<{
    loggedUser: fireBase.User | null,
    signup(email: string, password: string): Promise<any>;
    login(email: string, password: string): Promise<any>;
    logout(): Promise<any>,
  }>

  //default values                                    
  ({
    loggedUser: null,
    signup: (email: string, password: string) => new Promise(r => {}),
    login: (email: string, password: string) => new Promise(r => {}),
    logout: () => new Promise(r => {}),
  });

//Doesn't let more than one modal to be opened at once
const SessionProvider: React.FC<{}> = ({children}) => {
  const [loggedUser, setLoggedUser] = useState<fireBase.User | null>(null)
  
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(user => {
        setLoggedUser(user);
    })

    return unsuscribe;
  }, [])
  

  const signup = (email: string, password: string): Promise<any> => {
    return auth.createUserWithEmailAndPassword(email,password);
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => {
    return auth.signOut();
  }

  return (
    <SessionContext.Provider 
      value={{loggedUser,
              signup,
              login,
              logout,
             }}>
      {children}
    </SessionContext.Provider>
  )
}

export {SessionContext, SessionProvider}