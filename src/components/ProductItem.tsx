import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, IMAGES } from "../constants";

interface ProductItemProps {
  title: string;
  image: any;
  productCode: string;
  volume: string;
}

const ProductItem: FC<ProductItemProps> = ({
  title,
  image,
  productCode,
  volume,
}) => {
  return (
    <View style={styles.productItemContainer}>
      <View style={styles.productImageContainer}>
        <Image source={image} style={styles.productImage} />
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.top}>
          <Text style={styles.productCode}>Код продукта: #{productCode}</Text>
        </View>
        <Text style={styles.productTitle} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.bottom}>
          <View style={styles.productVolume}>
            <SimpleLineIcons name="drop" size={16} color="#72777E" />
            <Text style={styles.volumeText}>{volume}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItemContainer: {
    height: 120,
    marginVertical: 8,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  productImageContainer: {
    width: 70,
    height: "auto",
  },
  productImage: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "space-between",
  },
  top: {},
  productCode: {
    color: COLORS.accent,
    fontSize: 12,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  bottom: {
    flexDirection: "row",
  },
  productVolume: {
    flexDirection: "row",
  },
  volumeText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: "700",
    marginLeft: 2,
  },
});
