import { TouchableOpacity, Text } from "react-native";

export default function Button({children, bgColor="blue-400", textColor="white", onClick}) {
    return (
        <TouchableOpacity
            className={`mt-10 px-4 py-2 bg-${bgColor} rounded-md w-full flex justify-center items-center`}
            onPress={() => onClick()}
        >
            <Text className={`text-${textColor} text-lg`}>{children}</Text>
        </TouchableOpacity>
    )
}