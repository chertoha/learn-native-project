import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { EmailField } from "../../components/EmailField";
import { FormLogRegLink } from "../../components/FormLogRegLink";
import { FormSubmitButton } from "../../components/FormSubmitButton";
import { PasswordField } from "../../components/PasswordField";
import { TextInputField } from "../../components/TextInputField";
import { commonStyles } from "../../styles/common";
import Icon from "react-native-vector-icons/AntDesign";

export const RegistrationScreen = ({
  onInputFocus,
  isKeyboardOpen,
  closeKeyboard,
}) => {
  // const [state, setState] = useState(initialState);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearFields = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onSubmitHandler = () => {
    const values = { login, email, password };
    console.log(values);
    closeKeyboard();
    clearFields();
  };

  return (
    <View
      style={{
        ...commonStyles.container,
        ...styles.container,
        marginTop: isKeyboardOpen ? 43 : 219,
      }}
    >
      <View style={styles.imageBox}>
        <View style={styles.iconWrapper}>
          <Icon name="plus" size={16} color="#FF6C00" />
        </View>
      </View>

      <View style={commonStyles.formWrapper}>
        <Text style={commonStyles.title}>Регистрация</Text>

        <View style={commonStyles.fieldsWrapper}>
          <TextInputField
            placeholder="Логин"
            onFocus={onInputFocus}
            value={login}
            onChangeText={setLogin}
          />

          <EmailField
            value={email}
            onChangeText={setEmail}
            onFocus={onInputFocus}
          />

          <PasswordField
            value={password}
            onChangeText={setPassword}
            onFocus={onInputFocus}
          />
        </View>

        <FormSubmitButton
          title="Зарегистрироваться"
          onPress={onSubmitHandler}
        />

        <FormLogRegLink>Уже есть аккаунт? Войти</FormLogRegLink>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    // backgroundColor: "red",
  },

  imageBox: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: 0 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    zIndex: 999,
    color: "black",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    overflow: "hidden",
  },
});

// const registerContainer = StyleSheet.compose(
//   commonStyles.container,
//   styles.container
// );
