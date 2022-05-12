import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PageContainer from "../components/PageContainer";
import ProductItem from "../components/ProductItem";
import SearchComponent from "../components/SearchComponent";
import { IMAGES } from "../constants";

const tempProducts = [
  {
    title: "Общее чистящее средство",
    image: IMAGES.generalWashing,
    productCode: "105",
    volume: "1000 мл",
    price: "100,000",
  },
  {
    title: "Эвкалиптовые капсулы",
    image: IMAGES.capsul,
    productCode: "4018",
    volume: "60 капсул",
    price: "100,000",
  },
  {
    title: "Стиральный порошок для цветного белья",
    image: IMAGES.washingPowder,
    productCode: "102",
    volume: "1000 гр",
    price: "100,000",
  },
  {
    title: "Стиральный порошок для белого белья",
    image: IMAGES.washingPowderWhite,
    productCode: "101",
    volume: "1000 гр",
    price: "100,000",
  },
  {
    title: "Антижир",
    image: IMAGES.antiGrease,
    productCode: "114",
    volume: "1000 мл",
    price: "100,000",
    withDevice: true,
  },
  {
    title: "Гель для душа",
    image: IMAGES.showerGel,
    productCode: "125",
    volume: "1000 мл",
    price: "100,000",
  },
];

const CatalogScreen = () => {
  return (
    <PageContainer title={"Каталог"}>
      <SearchComponent />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tempProducts}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={({ item }) => <ProductItem {...item} />}
      />
    </PageContainer>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({});
