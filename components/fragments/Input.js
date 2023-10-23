import { View, Text, TextInput } from "react-native";

export default function Input({name, value, onChange, secureTextEntry = false}) {
    return(
        <View className="mt-4 w-full">
            <Text className="text-blue-500 text-lg mb-1 capitalize">{name}</Text>
            <TextInput
                className="px-4 py-2 w-full border-2 border-blue-400 rounded-md bg-white "
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder={`Type your ${name} here...`}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
} 