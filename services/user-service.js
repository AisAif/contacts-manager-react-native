import axiosInstance from "../config/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"


const login = async (data) => {
    try {
        const response = await axiosInstance.post("/users/login", data)
        if (response.status == 200) {
            await AsyncStorage.setItem("token", response.data.data.token)
            // console.log(await AsyncStorage.getItem("token"))
            return {
                status: true,
                data: "OK"
            }
        } else {
            throw new Error("An error occured")
        }
    } catch (error) {
        return {
            status: false,
            data: error.response.data
        }
    }
}

const signup = async (data) => {
    try {
        const response = await axiosInstance.post("/users", data)
        if (response.status == 200) {
            return {
                status: true,
                data: "OK"
            }
        } else {
            throw new Error("An error occured")
        }
    } catch (error) {
        return {
            status: false,
            data: error.response.data
        }
    }
}

const logout = async () => {
    try {
        await AsyncStorage.removeItem("token")
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export default {
    login,
    signup,
    logout
}