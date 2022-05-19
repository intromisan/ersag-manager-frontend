import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { useAppDispatch } from '../utils/hooks';
import { onSignIn, onSignOut } from '../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailBorderColor, setEmailBorderColor] = useState(COLORS.borderColor);
  const [passwordBorderColor, setPasswordBorderColor] = useState(COLORS.borderColor);

  const dispatch = useAppDispatch();

  return (
    // <KeyboardAvoidingView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={{ ...styles.input, borderColor: emailBorderColor }}
          onFocus={() => setEmailBorderColor(COLORS.accent)}
          onBlur={() => setEmailBorderColor(COLORS.borderColor)}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{ ...styles.input, borderColor: passwordBorderColor }}
          onFocus={() => setPasswordBorderColor(COLORS.accent)}
          onBlur={() => setPasswordBorderColor(COLORS.borderColor)}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonTooltip}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </Pressable>
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
  button: {
    backgroundColor: COLORS.accent,
    width: '100%',
    padding: 15,
    borderRadius: 3,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.accent,
    marginTop: 5
  },
  buttonOutlineText: {
    color: COLORS.accent,
    fontWeight: '700',
    fontSize: 16
  }
});
