import { Pressable, StyleSheet, Text } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../constants';

interface ButtonProps {
  text: string;
  pressHandler: () => void;
}

const PrimaryButton: FC<ButtonProps> = ({ text, pressHandler }) => {
  return (
    <Pressable onPress={pressHandler} style={styles.buttonPrimary}>
      <Text style={styles.buttonPrimaryText}>{text}</Text>
    </Pressable>
  );
};

const OutlineButton: FC<ButtonProps> = ({ text, pressHandler }) => {
  return (
    <Pressable onPress={pressHandler} style={[styles.buttonPrimary, styles.buttonOutline]}>
      <Text style={[styles.buttonPrimaryText, styles.buttonOutlineText]}>{text}</Text>
    </Pressable>
  );
};

export { PrimaryButton, OutlineButton };

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: COLORS.accent,
    padding: 15,
    borderRadius: 3,
    alignItems: 'center'
  },
  buttonPrimaryText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.accent
  },
  buttonOutlineText: {
    color: COLORS.accent,
    fontWeight: '700',
    fontSize: 16
  }
});
