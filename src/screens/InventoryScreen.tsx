import { FlatList, ImageEditor, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import SearchComponent from '../components/SearchComponent';
import { useGetInventoryItemsQuery } from '../services/inventory';
import InventoryItem from '../components/Inventory/InventoryItem';

const ListSeparator = () => {
  return <View style={{ height: 1, width: '100%', backgroundColor: '#000000' }} />;
};

const InventoryScreen = () => {
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
          data={inventory?.products}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={ListSeparator}
          renderItem={({ item: { product, itemAmount } }) => {
            return <InventoryItem title={product.name} productId={product.productId} imgUrl={product.image} itemAmount={itemAmount} price={product.price} code={product.code} />;
          }}
        />
      )}
    </PageContainer>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({});
