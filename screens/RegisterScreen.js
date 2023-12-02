import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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
                <Text className="text-xl font-semibold text-blue-500">Silahkan Mendaftar</Text>
                <View className="w-full mt-6">
                    <Input name="name" value={dataCredential.name} onChange={(value) => setDataCredential({...dataCredential, name: value})} />
                    <Input mt="6" name="username" value={dataCredential.username} onChange={(value) => setDataCredential({...dataCredential, username: value})} />
                    <Input mt="6" name="password" value={dataCredential.password} onChange={(value) => setDataCredential({...dataCredential, password: value})} secureTextEntry={true} />
                </View>
                <View style={{marginTop: 32}} className="w-full">
                    <Button onClick={() => register(dataCredential, navigation)}>Masuk</Button>
                </View>
                <View className="mt-6 flex flex-row">
                    <Text>Sudah mendaftar? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text className="text-blue-500">Klik di sini</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </GuestShell>
    )
}