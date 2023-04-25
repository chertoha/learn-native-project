import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { useRouter } from "./router";

export const SCREENS = {
  REGISTRATION: "Registration",
  LOGIN: "Login",
};

export default function MyApp() {
  // return <RegistrationScreen />;
  // return <LoginScreen />;

  const router = useRouter(true);

  return <NavigationContainer>{router}</NavigationContainer>;
}
