import { View, Text } from "react-native";
import AuthShell from "../components/layouts/AuthShell";
import { useState } from "react";
import Input from "../components/fragments/Input";
import Button from "../components/fragments/Button";
import contactService from "../services/contact-service";
import Spinner from "react-native-loading-spinner-overlay";

export default function AddContactScreen({navigation}) {
    const [contact, setContact] = useState({
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
    })
    const [isLoading, setIsLoading] = useState(false)

    const buttonAction = async () => {
        setIsLoading(true)
        result = await contactService.create(contact)
        if (result.status) {
            alert("Berhasil menambahkan kontak")
            setContact({
                firstname: null,
                lastname: null,
                email: null,
                phone: null,
            })
            navigation.navigate("Home")
        } else {
            alert(`Gagal menambahkan kontak\n\n${result.data.errors}`)
        }
        setIsLoading(false)
    }
    return (
        <AuthShell title="Add Contact">
            <Spinner visible={isLoading}/>
            <View className="flex justify-center items-center">
                <Text className="text-xl font-semibold text-blue-500">Silahkan Masukkan Kontak</Text>
                <View className="w-full mt-6">
                    <Input name="firstname" value={contact.firstname} onChange={(value) => setContact({...contact, firstname: value})} />
                    <Input mt="6" name="lastname" value={contact.lastname} onChange={(value) => setContact({...contact, lastname: value})} />
                    <Input mt="6" name="email" value={contact.email} onChange={(value) => setContact({...contact, email: value})} />
                    <Input mt="6" name="phone" value={contact.phone} onChange={(value) => setContact({...contact, phone: value})} keyboardType="phone-pad" />
                </View>
                <View style={{marginTop: 32}} className="w-full">
                    <Button onClick={() => buttonAction()}>Simpan</Button>
                </View>
            </View>
        </AuthShell>
    )
}