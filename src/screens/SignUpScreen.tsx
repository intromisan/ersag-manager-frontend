import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View></View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
});
