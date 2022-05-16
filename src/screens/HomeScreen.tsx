import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import { auth } from '../firebase';

const HomeScreen = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <PageContainer title="Главная">
      <Pressable onPress={handleSignOut}>
        <Text>Log out</Text>
      </Pressable>
    </PageContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
