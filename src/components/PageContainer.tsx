import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageTitle from "./PageTitle";
import { COLORS } from "../constants";

const { height, width } = Dimensions.get("screen");

interface PageContainerProps {
  title: string;
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ title, children }) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <PageTitle title={title} />
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default PageContainer;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: height * 0.13,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    // maxHeight: height - height * 0.1,
  },
});
