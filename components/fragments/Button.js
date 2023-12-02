import { TouchableOpacity, Text } from "react-native";

export default function Button({children, bgColor="rgb(59,130,246)", textColor="white", onClick, mt="4"}) {
    return (
        <TouchableOpacity
            className={`mt-${mt} px-4 py-2 rounded-md w-full flex justify-center items-center`}
            style={{backgroundColor: bgColor}}
            onPress={() => onClick()}
        >
            <Text className={`text-lg`} style={{color: textColor}}>{children}</Text>
        </TouchableOpacity>
    )
}