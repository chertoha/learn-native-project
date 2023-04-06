import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function MyApp() {
  // console.log(Platform.OS);
  // return (
  //   <View style={styles.container}>
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS === "ios" ? "padding" : "height"}
  //     >
  //       <View style={styles.wrapper}>
  //         <TextInput style={styles.input} placeholder="Text..." />
  //       </View>
  //     </KeyboardAvoidingView>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bgd-image.jpg")}
        resizeMode="cover"
        style={styles.bgdImage}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bgdImage: {
    flex: 1,
    justifyContent: "center",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "grey",
//   },

//   wrapper: {
//     flex: 1,
//     backgroundColor: "red",
//     marginHorizontal: 20,
//   },

//   input: {
//     height: 40,
//     borderWidth: 2,
//     // marginHorizontal: 20,
//   },
// });
