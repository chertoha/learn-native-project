import { useState } from "react";
import { TextInput } from "react-native";
import { commonStyles } from "../styles/common";

export const TextInputField = ({ onFocus, ...rest }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);

  return (
    <TextInput
      style={{
        ...commonStyles.field,
        borderColor: isOnFocus ? "#FF6C00" : "#E8E8E8",
      }}
      onFocus={() => {
        setIsOnFocus(true);
        onFocus();
      }}
      onBlur={() => {
        setIsOnFocus(false);
      }}
      {...rest}
    />
  );
};
