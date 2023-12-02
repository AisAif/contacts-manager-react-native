import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { View, Text, Image } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";

export default function GuestShell(props) {
    const {isLoading} = useContext(AuthContext)  
    return(
        <View className="pt-20 px-4 bg-slate-200 h-screen w-screen">
            <StatusBar style="auto"/>
            <Spinner visible={isLoading}/>
            <View className="flex justify-center items-center mb-10">
                <Image source={require("./../../assets/logo.png")} className="w-20 h-20 rounded-full mb-4" />
                <Text className="text-xl font-bold">Contact Manager</Text>
                <Text>By: Abdullah Isbarul Fahmi</Text>
                <Text>@ais_aif</Text>
            </View>
            <View>{props.children}</View>
        </View>
    )
}