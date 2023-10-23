import { View, Text } from "react-native";
import AuthShell from "../components/layouts/AuthShell";

export default function HomeScreen() {
    return (
        <AuthShell>
            <View>
                <Text>Home Screen</Text>
            </View>
        </AuthShell>
    )
}