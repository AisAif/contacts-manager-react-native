import { View, Text, ScrollView } from "react-native";
import AuthShell from "../components/layouts/AuthShell";
import React, { useState } from "react";
import contactService from "../services/contact-service";
import CardContact from "../components/elements/CardContact";
import { useFocusEffect } from "@react-navigation/native";

export default function HomeScreen() {
    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    const getContacts = () => {
        contactService.search(undefined, page)
            .then((res) => setContacts([...contacts, ...res.data.data]))
            .catch((err) => setError(err.response.data))

        setPage(page + 1)
        console.log(page)
    }
    useFocusEffect(
        React.useCallback(() => {
          getContacts()
    
          return () => {
            setContacts([])
          };
        }, [])
    );
    return (
        <AuthShell>
            <ScrollView showsVerticalScrollIndicator={false} className="h-[85%]" onScrollEndDrag={() => getContacts()}>
                <View className="flex gap-y-4">
                    {contacts && contacts.map((contact) => {
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
            </ScrollView>
        </AuthShell>
    )
}