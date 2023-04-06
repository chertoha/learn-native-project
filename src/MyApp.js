import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";

export default function MyApp() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bgd-image.jpg")}
        style={styles.bgdImage}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <RegistrationScreen />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bgdImage: {
    // paddingTop: 212,
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
