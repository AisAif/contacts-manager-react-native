import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import Ionicons from "@expo/vector-icons/Ionicons"
import { AuthContext } from './context/AuthContext';
import SearchScreen from './screens/SearchScreen';
import AddContactScreen from './screens/AddContactScreen';
import DetailContactScreen from './screens/DetailContactScreen';
import AddAddressScreen from './screens/AddAddressScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Search') {
                iconName = focused ? 'search-circle' : 'search-circle-outline';
                } else if (route.name === 'Add Contact') {
                iconName = focused ? 'create' : 'create-outline';
                }
    
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'rgb(59,130,246)',
            tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='Add Contact'
                component={AddContactScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    )
}

export default function Navigator() {
    const {isLogin} = useContext(AuthContext)
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                {isLogin ? 
                (<>
                    <Stack.Screen
                        name="MainTab"
                        component={MainTab}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DetailContact"
                        component={DetailContactScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AddAddress"
                        component={AddAddressScreen}
                        options={{ headerShown: false }}
                    />
                </>) :
                (<>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                />
                </>)
                }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}