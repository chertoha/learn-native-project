import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EmailField } from "./EmailField";
import { FormLogRegLink } from "./FormLogRegLink";
import { FormSubmitButton } from "./FormSubmitButton";
import { PasswordField } from "./PasswordField";
import { commonStyles } from "../styles/common";

export const Login = ({ onInputFocus, isKeyboardOpen, closeKeyboard }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmitHandler = () => {
    const values = { email, password };
    console.log(values);
    closeKeyboard();
    clearFields();
  };

  return (
    <View
      style={{
        ...commonStyles.container,
        marginTop: isKeyboardOpen ? 100 : 279,
      }}
    >
      <View style={commonStyles.formWrapper}>
        <Text style={title}>Войти</Text>

        <View style={commonStyles.fieldsWrapper}>
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

        <FormSubmitButton title="Войти" onPress={onSubmitHandler} />

        <FormLogRegLink>Нет аккаунта? Зарегистрироваться</FormLogRegLink>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
  },
});

const title = StyleSheet.compose(commonStyles.title, styles.title);
