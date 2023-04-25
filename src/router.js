import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { SCREENS } from "./MyApp";
import { PostsScreen } from "./screens/PostsScreen";
import { CreatePostsScreen } from "./screens/CreatePostsScreen";
import { CommentsScreen } from "./screens/CommentsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { MapScreen } from "./screens/MapScreen";
import { HomeScreen } from "./screens/HomeScreen";

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
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tab.Screen name="Comments" component={CommentsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
