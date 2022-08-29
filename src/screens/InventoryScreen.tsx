import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import SearchComponent from '../components/SearchComponent';
import { useGetInventoryItemsQuery } from '../services/inventory';
import InventoryItem from '../components/Inventory/InventoryItem';

const ListSeparator = () => {
  return <View style={styles.listSeparator} />;
};

const InventoryScreen = () => {
  const [isFetching, setIsFetching] = useState(false);

  const refreshHandler = async () => {
    setIsFetching(true);
    refetch();
    setIsFetching(false);
  };

  // RTK Queries
  const { data: inventory, isLoading, refetch } = useGetInventoryItemsQuery();

  return (
    <PageContainer title="Инвентарь">
      <SearchComponent />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={inventory}
          onRefresh={refreshHandler}
          refreshing={isFetching}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ListSeparator}
          renderItem={({ item: { product, quantity } }) => {
            return <InventoryItem title={product.name} productId={product.id} imgUrl={product.image} quantity={quantity} price={product.price} code={product.code} />;
          }}
        />
      )}
    </PageContainer>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  listSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000000'
  }
});
