import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

export const SCREENS = {
  REGISTRATION: "Registration",
  LOGIN: "Login",
};

export default function MyApp() {
  // return <RegistrationScreen />;
  // return <LoginScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREENS.REGISTRATION}
          component={RegistrationScreen}
        />
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
