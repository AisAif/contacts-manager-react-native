import { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import Button from "../fragments/Button";

export default function Header({children = "Home"}) {
    const navigation = useNavigation()
    const {logout} = useContext(AuthContext)
    return(
        <View className="px-4 pt-12 pb-4 bg-white flex flex-row justify-between items-center">
            <Text className="text-blue-500 text-xl">{children}</Text>
            <View>
                <Button onClick={() => logout(navigation)} bgColor="rgb(239,68,68)">Keluar</Button>
            </View>
        </View>
    )
}