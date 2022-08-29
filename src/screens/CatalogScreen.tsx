import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text } from 'react-native';
import PageContainer from '../components/PageContainer';
import ProductItem from '../components/Catalog/ProductItem';
import SearchComponent from '../components/SearchComponent';
import { useGetProductsQuery } from '../services/products';

const CatalogScreen = () => {
  const { data: products, isLoading, refetch, isFetching } = useGetProductsQuery();

  return (
    <PageContainer title={'Каталог'}>
      <SearchComponent />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          onRefresh={refetch}
          showsVerticalScrollIndicator={false}
          data={products}
          refreshing={isFetching}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ProductItem index={index} {...item} />}
        />
      )}
    </PageContainer>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({});
