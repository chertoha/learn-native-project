import { TextInput } from "react-native";
import { commonStyles } from "../styles/common";
import { TextInputField } from "./TextInputField";

export const PasswordField = ({ onFocus, value, onChangeText }) => {
  return (
    <TextInputField
      placeholder="Пароль"
      secureTextEntry={true}
      onFocus={onFocus}
      value={value}
      onChangeText={onChangeText}
    />
  );
};
