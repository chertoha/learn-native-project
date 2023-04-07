import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { EmailField } from "../../components/EmailField";
import { FormLogRegLink } from "../../components/FormLogRegLink";
import { FormSubmitButton } from "../../components/FormSubmitButton";
import { PasswordField } from "../../components/PasswordField";
import { TextInputField } from "../../components/TextInputField";
import { commonStyles } from "../../styles/common";

const initialState = {
  login: "",
  email: "",
  password: "",
};

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
        marginTop: isKeyboardOpen ? 43 : 219,
      }}
    >
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

// const styles = StyleSheet.extend(commonStyles, {});

// const styles = StyleSheet.create({});

// const container = StyleSheet.compose(commonStyles.container, styles.container);

// const styles = StyleSheet.compose(commonStyles, registerStyles);
