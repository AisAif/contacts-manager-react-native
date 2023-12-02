import {createContext, useState} from "react";
import userService from "../services/user-service";

export const AuthContext = createContext()

export function AuthProvider(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const register = async (data, navigation) => {
        setIsLoading(true)
        let result = await userService.signup(data)
        if (result.status) {
            alert("Anda Berhasil Mendaftar")
            navigation.navigate("Login")
        } else {
            alert(`Anda Gagal Mendaftar\n\n${result.data.errors}`)
        }
        setIsLoading(false)
    }

    const login = async (data, navigation) => {
        setIsLoading(true)
        let result = await userService.login(data)
        if (result.status) {
            setIsLogin(true)
            navigation.navigate("MainTab")
        } else {
            alert(`Anda Gagal Login\n\n${result.data.errors}`)
            console.log(result.data)
        }
        setIsLoading(false)
    }

    const logout = async (navigation) => {
        setIsLoading(true)
        let result = await userService.logout()
        if (result) {
            setIsLogin(false)
            navigation.navigate("Login")
        }
        setIsLoading(false)
    }
    return (
        <AuthContext.Provider value={{register, login, logout, isLoading, isLogin}}>
            {props.children}
        </AuthContext.Provider>
    )
}