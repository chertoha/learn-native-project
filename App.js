import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapper}>
          <TextInput style={styles.input} placeholder="Text..." />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },

  wrapper: {
    flex: 1,
    backgroundColor: "red",
    marginHorizontal: 20,
  },

  input: {
    height: 40,
    borderWidth: 2,
    // marginHorizontal: 20,
  },
});
