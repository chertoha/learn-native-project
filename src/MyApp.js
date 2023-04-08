import React, { useEffect, useState } from "react";
import { useCallback } from "react";
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
import * as Font from "expo-font";
import { loadAsync } from "expo-font";
// import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function MyApp() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      try {
        await SplashScreen.hideAsync();
      } catch (err) {
        console.log(err);
      }
    }
  }, [fontsLoaded]);

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

    // return () => {
    //   Keyboard.removeAllListeners("keyboardDidHide");
    // };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("./assets/images/bgd-image.jpg")}
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
              {/* <RegistrationScreen
                onInputFocus={onInputFocusHandler}
                isKeyboardOpen={isKeyboardOpen}
                closeKeyboard={closeKeyboard}
              /> */}

              <LoginScreen
                onInputFocus={onInputFocusHandler}
                isKeyboardOpen={isKeyboardOpen}
                closeKeyboard={closeKeyboard}
              />
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
