import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "../elements/Header";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

export default function AuthShell(props) {
    const {isLoading} = useContext(AuthContext)
    return(
        <View>
            <Spinner visible={isLoading}/>
            <Header>{props.title}</Header>
            <View className="pt-20 px-4 bg-slate-200 h-screen w-screen">
                <StatusBar style="auto"/>
                <View>{props.children}</View>
            </View>
        </View>
    )
}