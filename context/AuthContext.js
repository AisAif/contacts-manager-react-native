import {createContext, useState} from "react";
import userService from "../services/user-service";

export const AuthContext = createContext()

export function AuthProvider(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const register = async (data, navigation) => {
        setIsLoading(true)
        let result = await userService.signup(data, navigation)
        if (result) {
            alert("Anda Berhasil Mendaftar")
        } else {
            alert("Anda Gagal Mendaftar")
        }
        setIsLoading(false)
    }

    const login = async (data, navigation) => {
        setIsLoading(true)
        let result = await userService.login(data, navigation)
        if (result) {
            setIsLogin(true)
        }
        setIsLoading(false)
    }

    const logout = async (navigation) => {
        setIsLoading(true)
        let result = await userService.logout(navigation)
        if (result) {
            setIsLogin(false)
        }
        setIsLoading(false)
    }
    return (
        <AuthContext.Provider value={{register, login, logout, isLoading, isLogin}}>
            {props.children}
        </AuthContext.Provider>
    )
}