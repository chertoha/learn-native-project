import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { SCREENS } from "./MyApp";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const useRouter = (isLoggedIn) => {
  if (!isLoggedIn) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREENS.REGISTRATION}
          component={RegistrationScreen}
        />
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Posts" component={<Text>Posts</Text>} />
      <Tab.Screen name="CreatePosts" component={<Text>CreatePosts</Text>} />
      <Tab.Screen name="Comments" component={<Text>Comments</Text>} />
      <Tab.Screen name="Profile" component={<Text>Profile</Text>} />
      <Tab.Screen name="Map" component={<Text>Map</Text>} /> */}
    </Tab.Navigator>
  );
};
