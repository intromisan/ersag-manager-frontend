import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

interface ProductItemProps {
  title: string;
  image: any;
  productCode: string;
  volume: string;
  price: string;
  withDevice?: boolean;
}

const ProductItem: FC<ProductItemProps> = ({
  title,
  image,
  productCode,
  volume,
  price,
  withDevice,
}) => {
  return (
    <View style={styles.productItemContainer}>
      <View style={styles.productImageContainer}>
        <Image source={image} style={styles.productImage} />
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.top}>
          <Text style={styles.productCode}>Код продукта: #{productCode}</Text>
          {withDevice && (
            <View style={styles.chip}>
              <Text style={styles.chipText}>+ аппарат</Text>
            </View>
          )}
        </View>
        <Text style={styles.productTitle} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.bottom}>
          <View style={styles.productVolume}>
            <SimpleLineIcons name="drop" size={16} color="#72777E" />
            <Text style={styles.volumeText}>{volume}</Text>
          </View>
          <View style={styles.productPrice}>
            <Ionicons name="ios-pricetag-outline" size={16} color="#72777E" />
            <Text style={styles.priceText}>{price} UZS</Text>
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
    borderRadius: 3,
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
    marginLeft: 24,
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chip: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  chipText: {
    color: COLORS.white,
    fontSize: 12,
  },
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
    justifyContent: "space-between",
  },
  productVolume: {
    flexDirection: "row",
  },
  productPrice: {
    flexDirection: "row",
  },
  priceText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: "700",
    marginLeft: 3,
  },
  volumeText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: "700",
    marginLeft: 3,
  },
});
