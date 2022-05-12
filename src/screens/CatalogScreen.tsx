import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PageContainer from "../components/PageContainer";
import ProductItem from "../components/ProductItem";
import { IMAGES } from "../constants";

const tempProducts = [
  {
    title: "Общее чистящее средство",
    image: IMAGES.generalWashing,
    productCode: "105",
    volume: "1000 мл",
  },
  {
    title: "Эвкалиптовые капсулы",
    image: IMAGES.capsul,
    productCode: "4018",
    volume: "60 капсул",
  },
  {
    title: "Стиральный порошок для цветного белья",
    image: IMAGES.washingPowder,
    productCode: "102",
    volume: "1000 гр",
  },
  {
    title: "Стиральный порошок для белого белья",
    image: IMAGES.washingPowderWhite,
    productCode: "101",
    volume: "1000 гр",
  },
  {
    title: "Антижир",
    image: IMAGES.antiGrease,
    productCode: "114",
    volume: "1000 мл",
  },
  {
    title: "Гель для душа",
    image: IMAGES.showerGel,
    productCode: "125",
    volume: "1000 мл",
  },
];

const CatalogScreen = () => {
  return (
    <PageContainer title={"Каталог"}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tempProducts}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={({ item }) => (
          <ProductItem
            title={item.title}
            image={item.image}
            volume={item.volume}
            productCode={item.productCode}
          />
        )}
      />
    </PageContainer>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({});
