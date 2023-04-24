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
import AuthView from "./components/AuthView";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useKeyboardForm } from "./hooks/useKeyboardForm";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";

export default function MyApp() {
  // const { closeKeyboard, isKeyboardOpen, onInputFocus } = useKeyboardForm();

  // return (
  //   <View style={styles.container}>
  //     <ImageBackground
  //       source={require("./assets/images/bgd-image.jpg")}
  //       style={styles.bgdImage}
  //     >
  //       <KeyboardAvoidingView
  //         behavior={Platform.OS === "ios" ? "padding" : "height"}
  //       >
  //         <TouchableWithoutFeedback onPress={closeKeyboard}>
  //           <ScrollView
  //             keyboardShouldPersistTaps="handled"
  //             keyboardDismissMode="on-drag"
  //           >
  //             <RegistrationScreen
  //               onInputFocus={onInputFocus}
  //               isKeyboardOpen={isKeyboardOpen}
  //               closeKeyboard={closeKeyboard}
  //             />

  //             {/* <LoginScreen
  //               onInputFocus={onInputFocus}
  //               isKeyboardOpen={isKeyboardOpen}
  //               closeKeyboard={closeKeyboard}
  //             /> */}
  //           </ScrollView>
  //         </TouchableWithoutFeedback>
  //       </KeyboardAvoidingView>
  //     </ImageBackground>
  //   </View>
  // );

  // return <AuthView WrappedComponent={Register} />;
  // return <AuthView WrappedComponent={Login} />;
  return <RegistrationScreen />;
  // return <LoginScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },

//   bgdImage: {
//     // paddingTop: 212,
//     // flex: 1,
//     justifyContent: "center",
//     resizeMode: "cover",
//   },
// });
