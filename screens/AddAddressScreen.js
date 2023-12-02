import { View, Text } from "react-native";
import AuthShell from "../components/layouts/AuthShell";
import { useEffect, useState } from "react";
import Input from "../components/fragments/Input";
import Button from "../components/fragments/Button";
import addressService from "../services/address-service";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";

export default function AddAddressScreen({route}) {
    const [contact, setContact] = useState({})
    const [address, setAddress] = useState({
        street: null,
        city: null,
        province: null,
        country: null
    })
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        setContact(route.params.contact) 
    }, [])

    const buttonAction = async () => {
        setIsLoading(true)
        result = await addressService.create(contact.id, address)
        if (result.status) {
            alert("Berhasil menambahkan alamat")
            setAddress({
                street: null,
                city: null,
                province: null,
                country: null,
            })
            navigation.navigate("DetailContact", {contact})
        } else {
            alert(`Gagal menambahkan alamat\n\n${result.data.errors}`)
        }
        setIsLoading(false)
    }
    return (
        <AuthShell title="Add address">
            <Spinner visible={isLoading}/>
            <View className="flex justify-center items-center">
                <Text className="text-xl font-semibold text-blue-500">Silahkan Masukkan Alamat</Text>
                <View className="w-full mt-6">
                    <Input name="street" value={address.street} onChange={(value) => setAddress({...address, street: value})} />
                    <Input mt="6" name="city" value={address.city} onChange={(value) => setAddress({...address, city: value})} />
                    <Input mt="6" name="province" value={address.province} onChange={(value) => setAddress({...address, province: value})} />
                    <Input mt="6" name="country" value={address.country} onChange={(value) => setAddress({...address, country: value})} />
                </View>
                <View style={{marginTop: 32}} className="w-full">
                    <Button onClick={() => buttonAction()}>Simpan</Button>
                </View>
            </View>
        </AuthShell>
    )
}