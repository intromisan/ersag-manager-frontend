import { Dimensions, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("screen");

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView style={styles.innerContainer}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default PageContainer;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  innerContainer: {
    flex: 1,
    maxHeight: height - 120,
  },
});
