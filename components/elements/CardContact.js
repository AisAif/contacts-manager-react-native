import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function CardContact({contact}) {
    const navigation = useNavigation()
    return (
        <View key={contact.id} className="flex flex-row justify-between items-center px-4 py-2 bg-white rounded-md">
            <View>
                <Text className="text-blue-500 font-bold text-lg">{contact.firstname} {contact.lastname}</Text>
                <Text className="text-green-700">{contact.phone}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("DetailContact", {contact})} className="border-blue-400 border-2 rounded-full px-1">
                <Text className="text-2xl text-blue-400">{" > "}</Text>
            </TouchableOpacity>
        </View>
    )
}