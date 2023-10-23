import { View, Text, TouchableOpacity } from "react-native";
import { logout } from "../../services/user-service";

export default function Header({children = "Home", navigation}) {
    return(
        <View className="p-2 bg-white flex flex-row justify-between items-center">
            <Text className="text-blue-500">{children}</Text>
            <TouchableOpacity onPress={() => logout(navigation)}>
                <Text>Keluar</Text>
            </TouchableOpacity>
        </View>
    )
}