import Icon from "react-native-vector-icons/Octicons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Camera } from "expo-camera";
import { commonStyles } from "../styles/common";
import { TextInputField } from "./TextInputField";

export const CreatePosts = () => {
  return (
    <View style={styles.container}>
      <View style={commonStyles.formWrapper}>
        <View style={styles.cameraWrapper}>
          <Camera style={styles.camera}></Camera>
        </View>
        <Text style={styles.downloadPhotoText}>Загрузите фото</Text>
        <TextInputField style={styles.photoName} placeholder="Название..." />
        <View style={styles.photoPlaceWrapper}>
          {/* <View style={styles.iconWrapper}></View> */}
          <Icon name="location" size={24} style={styles.iconWrapper} />

          <TextInputField
            style={styles.photoPlace}
            placeholder="Местность..."
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  cameraWrapper: {
    // height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },

  camera: {
    // flex: 1,
    height: 240,
    // borderRadius: 8,
  },

  downloadPhotoText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    color: "#BDBDBD",
  },

  photoName: {
    marginTop: 32,
    paddingHorizontal: 0,
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
  },

  photoPlaceWrapper: {
    position: "relative",
    marginTop: 16,
  },

  photoPlace: {
    paddingHorizontal: 0,
    paddingLeft: 28,
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
  },

  iconWrapper: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 0,
    top: 13,
    zIndex: 1,
  },
});
