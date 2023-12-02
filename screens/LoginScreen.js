import { View, Text, TouchableOpacity } from "react-native";
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
                <View className="w-full mt-6">
                    <Input name="username" value={dataCredential.username} onChange={(value) => setDataCredential({...dataCredential, username: value})} />
                    <Input mt="6" name="password" value={dataCredential.password} onChange={(value) => setDataCredential({...dataCredential, password: value})} secureTextEntry={true} />
                </View>
                <View style={{marginTop: 32}} className="w-full">
                    <Button onClick={() => login(dataCredential, navigation)}>Masuk</Button>
                </View>
                <View className="mt-6 flex flex-row">
                    <Text>Belum mendaftar? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text className="text-blue-500">Klik di sini</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </GuestShell>
    )
}