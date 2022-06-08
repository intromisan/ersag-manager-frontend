import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { Product } from '../interfaces';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useAddOneItemToInventoryMutation } from '../services/inventory';

const RightSwipe = () => {
  return (
    <View style={styles.rightSwipeContainer}>
      <View style={styles.rightSwipeItemContainer}>
        <Text style={styles.rightSwipeText}>+</Text>
      </View>
    </View>
  );
};

let row: Array<any> = [];

interface ProductItemProps extends Product {
  index: number;
  // _id: string;
}

const ProductItem: FC<ProductItemProps> = ({ name, image, code, volume, price, withDevice, productId, index }) => {
  // RTK Queries
  const [addOneItemToInventory] = useAddOneItemToInventoryMutation();

  const swipeRightHandler = (productId: string, index: number) => {
    addOneItemToInventory({ productId, itemAmount: 1 });
    row[index].close();
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={RightSwipe} friction={2} rightThreshold={30} ref={(ref) => (row[index] = ref)} onSwipeableOpen={() => swipeRightHandler(productId, index)}>
        <View style={styles.productItemContainer}>
          <View style={styles.productImageContainer}>
            <Image source={{ uri: image }} style={styles.productImage} />
          </View>
          <View style={styles.productInfoContainer}>
            <View style={styles.top}>
              <Text style={styles.code}>Код продукта: #{code}</Text>
              {withDevice ? (
                <View style={styles.chip}>
                  <Text style={styles.chipText}>+ аппарат</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.productTitle} numberOfLines={2}>
              {name}
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
      </Swipeable>
    </GestureHandlerRootView>
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
    flexDirection: 'row'
  },
  productImageContainer: {
    width: 70,
    height: 'auto'
  },
  productImage: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 24,
    justifyContent: 'space-between'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chip: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10
  },
  chipText: {
    color: COLORS.white,
    fontSize: 12
  },
  code: {
    color: COLORS.accent,
    fontSize: 12
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productVolume: {
    flexDirection: 'row'
  },
  productPrice: {
    flexDirection: 'row'
  },
  priceText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: '700',
    marginLeft: 3
  },
  volumeText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: '700',
    marginLeft: 3
  },
  rightSwipeContainer: {
    backgroundColor: COLORS.white,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8
  },
  rightSwipeItemContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.accent,
    borderRadius: 25,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightSwipeText: {
    color: COLORS.white,
    fontSize: 32
  }
});
