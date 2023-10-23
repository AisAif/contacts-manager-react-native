import { View, Text, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import GuestShell from "../components/layouts/GuestShell";
import Input from "../components/fragments/Input";
import Button from "../components/fragments/Button";

export default function RegisterScreen({navigation}) {
    const [dataCredential, setDataCredential] = useState({
        username: null,
        name: null,
        password: null
    })

    const { register } = useContext(AuthContext)
    return (
        <GuestShell>
            <View className="flex justify-center items-center">
                <Text className="text-xl font-semibold text-blue-500">Silahkan Login</Text>
                <ScrollView className="w-full">
                    <Input name="username" value={dataCredential.username} onChange={(value) => setDataCredential({...dataCredential, username: value})} />
                    <Input name="name" value={dataCredential.name} onChange={(value) => setDataCredential({...dataCredential, name: value})} />
                    <Input name="password" value={dataCredential.password} onChange={(value) => setDataCredential({...dataCredential, password: value})} secureTextEntry={true} />
                </ScrollView>
                <Button onClick={() => register(dataCredential, navigation)}>Daftar</Button>
            </View>
        </GuestShell>
    )
}