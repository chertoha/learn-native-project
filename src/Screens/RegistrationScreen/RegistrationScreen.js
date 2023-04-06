import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { commonStyles } from "../../styles/common";

export const RegistrationScreen = () => {
  return (
    <ScrollView>
      <View style={commonStyles.container}>
        <View style={commonStyles.formWrapper}>
          <Text style={commonStyles.title}>Регистрация</Text>

          <View style={commonStyles.fieldsWrapper}>
            <TextInput style={commonStyles.field} placeholder="Логин" />
            <TextInput
              style={commonStyles.field}
              placeholder="Адрес электронной почты"
            />
            <TextInput
              style={commonStyles.field}
              placeholder="Пароль"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={commonStyles.button} activeOpacity={0.7}>
            <Text style={commonStyles.buttonText}>Зарегистрироваться</Text>
          </TouchableOpacity>

          <TouchableOpacity style={commonStyles.logRegLink}>
            <Text style={commonStyles.logRegLinkText}>
              Уже есть аккаунт? Войти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.extend(commonStyles, {});

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: 212,
  //     // width: 200,
  //     // backgroundColor: "grey",
  //     // color: "#fff",
  //     borderTopLeftRadius: 25,
  //     borderTopRightRadius: 25,
  //     backgroundColor: "#fff",
  //   },
  //   formWrapper: {
  //     flex: 1,
  //     marginHorizontal: 16,
  //   },
  //   title: {
  //     marginTop: 92,
  //     color: "#212121",
  //     fontWeight: "500",
  //     fontSize: 30,
  //     lineHeight: 1.167,
  //     letterSpacing: 0.01,
  //   },r
  //   fieldsWrapper: {
  //     marginTop: 32,
  //     rowGap: 16,
  //   },
  //   field: {
  //     height: 50,
  //     color: "#BDBDBD",
  //     fontWeight: "400",
  //     fontSize: 16,
  //     lineHeight: 1.188,
  //     backgroundColor: "#F6F6F6",
  //     borderRadius: 8,
  //   },
});

// const container = StyleSheet.compose(commonStyles.container, styles.container);

// const styles = StyleSheet.compose(commonStyles, registerStyles);
