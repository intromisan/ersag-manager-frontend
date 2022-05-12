import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../constants";

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.headlineColor,
  },
});
