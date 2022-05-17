import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import { auth } from '../firebase';
import { useGetUsersQuery } from '../services/user';

const HomeScreen = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  const { data: users } = useGetUsersQuery();

  console.log(users);

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
