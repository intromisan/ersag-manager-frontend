import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import PageContainer from "../components/PageContainer";
import ProductItem from "../components/ProductItem";
import SearchComponent from "../components/SearchComponent";
import { useGetProductsQuery } from "../services/products";

const CatalogScreen = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <PageContainer title={"Каталог"}>
      <SearchComponent />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductItem {...item} />}
        />
      )}
    </PageContainer>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({});
