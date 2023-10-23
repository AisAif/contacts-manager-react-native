import { View, Text, ScrollView } from "react-native";
import { useContext, useState } from "react";
import GuestShell from "../components/layouts/GuestShell";
import Input from "../components/fragments/Input";
import Button from "../components/fragments/Button";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({navigation}) {
    const [dataCredential, setDataCredential] = useState({
        username: null,
        password: null
    })

    const {login} = useContext(AuthContext)
    return (
        <GuestShell>
            <View className="flex justify-center items-center">
                <Text className="text-xl font-semibold text-blue-500">Silahkan Login</Text>
                <ScrollView className="w-full">
                    <Input name="username" value={dataCredential.username} onChange={(value) => setDataCredential({...dataCredential, username: value})} />
                    <Input name="password" value={dataCredential.password} onChange={(value) => setDataCredential({...dataCredential, password: value})} secureTextEntry={true} />
                </ScrollView>
                <Button onClick={() => login(dataCredential, navigation)}>Masuk</Button>
            </View>
        </GuestShell>
    )
}