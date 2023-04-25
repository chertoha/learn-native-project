import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { useRouter } from "./router/router";

export default function MyApp() {
  // return <RegistrationScreen />;
  // return <LoginScreen />;

  const router = useRouter(false);

  return <NavigationContainer>{router}</NavigationContainer>;
}
