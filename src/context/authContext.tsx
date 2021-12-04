import { message } from "antd";
import axios from "axios";
import { createContext, useState } from "react";
import { AuthContextState, ILogin, IUser } from "./types";

const contextDefaultValue:AuthContextState ={
    token:'',
    register:()=>{},
    login:()=>{},
}

export const AuthContext = createContext(contextDefaultValue);

//export const AuthContext = createContext(contextDefaultValue);

type AuthContextProviderProps = {
    children:React.ReactNode
}

const AuthProvider = ({children}:AuthContextProviderProps)=>{
   const [token,setToken] = useState<string|null>(localStorage.getItem("token"));

   const login = async (user:ILogin) => {
    try {
      const res = await axios.post(
        'http://localhost:1337/auth/local',
        user
      );
      if (res) {
          console.log(res.data)
        localStorage.setItem('token', res.data.jwt);
        setToken(localStorage.getItem('token'));
      }
    } catch (error) {
      console.log(error);
      message.error('Bad credentials');
    }
  };

  const register = async(user:IUser) =>{
    try {
        const res = await axios.post(
          'http://localhost:1337/auth/local/register',
          user
        );
        if (res) {
          message.success('user registered successfully');
        }
      } catch (error) {
          console.log(error);
        message.error(`error ${error}`)
      }
  }

  const value ={
      token,
      register,
      login,
  } 

  return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;