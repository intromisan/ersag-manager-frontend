import { ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import SearchComponent from '../components/SearchComponent';

const CartScreen = () => {
  return (
    <PageContainer title="Инвентарь">
      <SearchComponent />
      <ScrollView></ScrollView>
    </PageContainer>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
