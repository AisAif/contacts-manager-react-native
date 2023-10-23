import axiosInstance from "../config/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"


const login = async (data, navigation) => {
    try {
        const response = await axiosInstance.post("/users/login", data)
        if (response.status == 200) {
            await AsyncStorage.setItem("token", response.data.data.token)
            navigation.navigate('MainTab')
            return true
        } else {
            throw new Error("An error occured")
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

const signup = async (data, navigation) => {
    try {
        const response = await axiosInstance.post("/users", data)
        if (response.status == 200) {
            navigation.navigate('Login')
            return true
        } else {
            throw new Error("An error occured")
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

const logout = async (navigation) => {
    try {
        await AsyncStorage.removeItem("token")
        navigation.navigate("Login")
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