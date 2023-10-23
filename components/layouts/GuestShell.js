import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";

export default function GuestShell(props) {
    const {isLoading} = useContext(AuthContext)
    return(
        <View className="pt-20 px-4 bg-slate-200 h-screen w-screen">
            <StatusBar style="auto"/>
            <Spinner visible={isLoading}/>
            <View>{props.children}</View>
        </View>
    )
}