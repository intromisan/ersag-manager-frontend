import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageContainer from "../components/PageContainer";

const HomeScreen = () => {
  return (
    <PageContainer title="Главная">
      <Text>Мама привет!</Text>
    </PageContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
