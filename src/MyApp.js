import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";

export default function MyApp() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  // console.log(isKeyboardOpen);

  const closeKeyboard = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  const onInputFocusHandler = () => {
    setIsKeyboardOpen(true);
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
      // Keyboard.dismiss();
    });

    return () => {
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bgd-image.jpg")}
        style={styles.bgdImage}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={closeKeyboard}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
              <RegistrationScreen
                onInputFocus={onInputFocusHandler}
                isKeyboardOpen={isKeyboardOpen}
                closeKeyboard={closeKeyboard}
              />

              {/* <LoginScreen
                onInputFocus={onInputFocusHandler}
                isKeyboardOpen={isKeyboardOpen}
                closeKeyboard={closeKeyboard}
              /> */}
            </ScrollView>
          </TouchableWithoutFeedback>
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
    // flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
