import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { useAppDispatch } from '../utils/hooks';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../components/Button';
import { useCreateUserSessionMutation } from '../services/user';
import { onSignIn } from '../redux/slices/userSlice';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailBorderColor, setEmailBorderColor] = useState(COLORS.borderColor);
  const [passwordBorderColor, setPasswordBorderColor] = useState(COLORS.borderColor);

  const [createUserSession] = useCreateUserSessionMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    const session = await createUserSession({ email, password }).unwrap();
    dispatch(onSignIn(session.accessToken));
  };

  const navigation = useNavigation();

  return (
    // <KeyboardAvoidingView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Электронная почта"
          style={{ ...styles.input, borderColor: emailBorderColor }}
          onFocus={() => setEmailBorderColor(COLORS.accent)}
          onBlur={() => setEmailBorderColor(COLORS.borderColor)}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Пароль"
          secureTextEntry
          style={{ ...styles.input, borderColor: passwordBorderColor }}
          onFocus={() => setPasswordBorderColor(COLORS.accent)}
          onBlur={() => setPasswordBorderColor(COLORS.borderColor)}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonTooltip}>
        <PrimaryButton text="Войти" pressHandler={() => onSubmit()} />
        <View style={styles.loginContainer}>
          <Text style={styles.loginOuterText}>У вас нет аккаунта?</Text>
          <Pressable style={styles.loginInnerContainer} onPress={() => navigation.navigate('SignUp' as never)}>
            <Text style={[styles.loginOuterText, styles.loginInnerText]}>Зарегистрироваться</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    paddingLeft: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5
  },
  buttonTooltip: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  loginOuterText: {
    color: COLORS.textLight
  },
  loginInnerContainer: {
    marginLeft: 5
  },
  loginInnerText: {
    color: COLORS.accent
  }
});
