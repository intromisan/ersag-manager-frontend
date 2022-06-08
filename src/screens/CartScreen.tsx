import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import SearchComponent from '../components/SearchComponent';
import { useGetInventoryItemsQuery } from '../services/inventory';

const CartScreen = () => {
  // RTK Queries
  const { data: inventory, isLoading } = useGetInventoryItemsQuery();

  return (
    <PageContainer title="Инвентарь">
      <SearchComponent />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={inventory.products}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => {
            return <Text>{`${item.product.name} (${item.itemAmount}x)`}</Text>;
          }}
        />
      )}
    </PageContainer>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
