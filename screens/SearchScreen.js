import { View, Text, ScrollView } from "react-native";
import AuthShell from "../components/layouts/AuthShell";
import { useCallback, useEffect, useState } from "react";
import contactService from "../services/contact-service";
import Input from "../components/fragments/Input";
import CardContact from "../components/elements/CardContact";
import { useFocusEffect } from "@react-navigation/native";

export default function SearchScreen() {
    const [contacts, setContacts] = useState([])
    const [searchValue, setSearchValue] = useState({
        name: null,
        email: null,
        phone: null,
    })
    const [error, setError] = useState(null)

    const searchContacts = (value=null) => {
        contactService.search(value)
            .then((res) => setContacts(res.data.data))
            .catch((err) => setError(err.response.data))
        console.log(contacts)
    }

    useFocusEffect(
        useCallback(() => {
            searchContacts(searchValue)

            return () => {
                setContacts([])
            }
        }, [])
    )

    useEffect(() => {
        searchContacts(searchValue)
    }, [searchValue])
    return (
        <AuthShell title="Search Contact">
                <View className="pb-4 border-b-2 border-green-500">
                    <Input mt="2" name="name" value={searchValue.name} onChange={(name) => setSearchValue({...searchValue, name})} />
                    <Input mt="2" name="email" value={searchValue.email} onChange={(email) => setSearchValue({...searchValue, email})} />
                    <Input mt="2" name="phone" value={searchValue.phone} onChange={(phone) => setSearchValue({...searchValue, phone})} keyboardType="phone-pad" />
                </View>
            <ScrollView showsVerticalScrollIndicator={false} className="h-[50%]">
                <View className="pt-6">
                    <View className="flex gap-y-4">
                        {contacts?.map((contact) => {
                            return (
                                <View key={contact.id}>
                                    <CardContact contact={contact} />
                                </View>
                            )
                        })}
                    </View>
                    <View>
                    {error && (
                        <Text>Maaf, Terjadi Kesalahan</Text>
                    )}
                    </View>
                </View>
            </ScrollView>
        </AuthShell>
    )
}