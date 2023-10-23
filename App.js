// In App.js in a new project
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import Ionicons from "@expo/vector-icons/Ionicons"
import { AuthContext, AuthProvider } from './context/AuthContext';

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
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
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
    </Tab.Navigator>
  )
}

function App() {

  const { isLogin } = useContext(AuthContext)
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isLogin ? 
            (<>
              <Stack.Screen
                name="MainTab"
                component={MainTab}
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
    </AuthProvider>
  );
}

export default App;