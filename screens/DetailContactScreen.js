import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import AuthShell from "../components/layouts/AuthShell";
import Button from "../components/fragments/Button";
import contactService from "../services/contact-service";
import addressService from "../services/address-service";
import { useNavigation } from "@react-navigation/native";

export default function DetailContactScreen({route}) {
    const [contact, setContact] = useState({});
    const [addresses, setAddresses] = useState([]);

    const navigation = useNavigation()
    
    const deleteContact = () => {
        contactService.remove(contact.id).then((res) => {
            if (res.data.errors) {
                alert(`Gagal menghapus kontak\n\n${res.data.errors}`)
            } else {
                alert("Berhasil menghapus kontak")
                navigation.navigate("Home")
            }
        })
    }

    const deleteAddress = (addressId) => {
        addressService.remove(contact.id, addressId).then((res) => {
            if (res.data.errors) {
                alert(`Gagal menghapus alamat\n\n${res.data.errors}`)
            } else {
                alert("Berhasil menghapus alamat")
                navigation.navigate("DetailContact", {contact, reload: true})
            }
        })
    }
    
    const getAllAddresses = () => {
        console.log(contact.id)
        addressService.getAll(contact.id)
        .then((res) => {
            setAddresses(res.data.data)
        })
        
        console.log(addresses)
    }
    
    useEffect(() => {
        if (route.params.reload) {
            getAllAddresses()
        }
        setContact(route.params.contact)
    }, [])

    useEffect(() => {
        getAllAddresses()
    }, [contact, route.params])
    return (
        <AuthShell title="Detail Contact">
            <ScrollView showsVerticalScrollIndicator={false} className="h-[90%]">
                <View className="flex justify-center items-center">
                    <Image source={require("./../assets/blank-profile.png")} className="w-32 h-32 rounded-full"/>
                    <Text className="text-2xl font-semibold text-blue-500">{contact.firstname} {contact.lastname}</Text>
                    <View style={{marginTop: 16}} className="flex flex-col justify-center items-center w-full">
                        <Text className="text-xl font-semibold text-blue-500">{contact.phone}</Text>
                        <Text className="font-semibold text-blue-500">{contact.email}</Text>
                    </View>
                    <View style={{marginTop: 24}} className="flex flex-row justify-center items-center w-full gap-x-8">
                        <View>
                            <Button onClick={() => navigation.navigate("AddAddress", {contact})}>Tambah Alamat</Button>
                        </View>
                        <View>
                            <Button bgColor="rgb(239,68,68)" onClick={() => deleteContact()}>Hapus Kontak</Button>
                        </View>
                    </View>
                    <View style={{marginTop: 24, paddingTop: 16}} className="flex flex-col justify-start items-start w-full border-t-2 border-slate-400">
                        <Text className="text-xl font-semibold text-green-600">Alamat Kontak</Text>
                        <View className="w-full">
                            {addresses && addresses.map((address, index) => {
                                return (
                                    <View key={index} className="w-full">
                                        <View style={{marginTop: 16, padding: 8}} className="border-2 border-green-600 rounded-lg w-full">
                                            <Text style={{marginBottom: 8}} className="text-lg font-semibold text-blue-500">Alamat {index+1}</Text>
                                            <Text className="text-normal font-semibold text-blue-500">{address.street}</Text>
                                            <Text className="text-normal font-semibold text-blue-500">Kota: {address.city}</Text>
                                            <Text className="text-normal font-semibold text-blue-500">Provinsi: {address.province}</Text>
                                            <Text style={{marginBottom: 16}} className="text-normal font-semibold text-blue-500">Negara: {address.country}</Text>
                                            <Button bgColor="rgb(239,68,68)" onClick={() => deleteAddress(address.id)}>Hapus Alamat</Button>
                                        </View>
                                    </View>
                                )
                            })}
                            {addresses &&addresses.length === 0 &&
                                <View style={{marginTop: 32}} className="w-full">
                                    <Text className="text-slate-500 text-center text-lg">-- Tidak ada alamat --</Text>
                                </View>
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </AuthShell>
    )
}