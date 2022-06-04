import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { PrimaryButton } from '../components/Button';
import { useCreateUserMutation } from '../services/user';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [emailBorderColor, setEmailBorderColor] = useState(COLORS.borderColor);
  const [passwordBorderColor, setPasswordBorderColor] = useState(COLORS.borderColor);
  const [nameBorderColor, setNameBorderColor] = useState(COLORS.borderColor);
  const [passwordConfirmationBorderColor, setPasswordConfirmationBorderColor] = useState(COLORS.borderColor);

  // RTK Queries
  const [createUser, { isLoading: isUpdating }] = useCreateUserMutation();

  const navigation = useNavigation();

  const onSubmit = () => {
    const signUpData = {
      email,
      password,
      name,
      passwordConfirmation
    };
    createUser(signUpData);
  };

  return isUpdating ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  ) : (
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
          placeholder="Имя"
          style={{ ...styles.input, borderColor: nameBorderColor }}
          onFocus={() => setNameBorderColor(COLORS.accent)}
          onBlur={() => setNameBorderColor(COLORS.borderColor)}
          value={name}
          onChangeText={(text) => setName(text)}
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
        <TextInput
          placeholder="Подтверждение пароля"
          secureTextEntry
          style={{ ...styles.input, borderColor: passwordConfirmationBorderColor }}
          onFocus={() => setPasswordConfirmationBorderColor(COLORS.accent)}
          onBlur={() => setPasswordConfirmationBorderColor(COLORS.borderColor)}
          value={passwordConfirmation}
          onChangeText={(text) => setPasswordConfirmation(text)}
        />
      </View>
      <View style={styles.buttonTooltip}>
        <PrimaryButton text="Зарегистрироваться" pressHandler={() => onSubmit()} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginOuterText}>У вас уже есть аккаунт?</Text>
        <Pressable style={styles.loginInnerContainer} onPress={() => navigation.navigate('SignIn' as never)}>
          <Text style={[styles.loginOuterText, styles.loginInnerText]}>Войти</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

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
  button: {
    backgroundColor: COLORS.accent,
    width: '100%',
    padding: 15,
    borderRadius: 3,
    alignItems: 'center'
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  loginOuterText: {
    // fontSize: 13
    color: COLORS.textLight
  },
  loginInnerContainer: {
    marginLeft: 5
  },
  loginInnerText: {
    color: COLORS.accent
  }
});
