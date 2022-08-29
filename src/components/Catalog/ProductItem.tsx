import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { SimpleLineIcons, Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { IProduct } from '../../interfaces/product';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { getUnitVolume } from '../../utils/masks';
import { useAddItemInventoryMutation } from '../../services/inventory';

interface RightSwipeProps {
  index: number;
  onBuyPressed: (index: number) => void;
  onGiftPressed: (index: number) => void;
}

const RightSwipe: FC<RightSwipeProps> = ({ index, onGiftPressed, onBuyPressed }) => {
  return (
    <>
      <Pressable onPress={() => onBuyPressed(index)}>
        <View style={[styles.rightSwipeContainer, styles.primary]}>
          <View style={styles.rightSwipeItemContainer}>
            <Feather name="dollar-sign" style={styles.rightSwipeIcon} />
            <Text style={styles.rightSwipeText}>Покупка</Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={() => onGiftPressed(index)}>
        <View style={[styles.rightSwipeContainer, styles.warning]}>
          <View style={styles.rightSwipeItemContainer}>
            <Feather name="gift" style={styles.rightSwipeIcon} />
            <Text style={styles.rightSwipeText}>Подарок</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

let row: Array<any> = [];

interface ProductItemProps extends IProduct {
  index: number;
}

const ProductItem: FC<ProductItemProps> = ({ name, image, code, volume, volumeUnit, price, withDevice, id, index }) => {
  // RTK Queries
  const [addItemInventory] = useAddItemInventoryMutation();

  const onAddGift = (index: number) => {
    addItemInventory({
      productId: id,
      quantity: 1,
      isGift: true
    });
    row[index].close();
  };

  const onBuyAdd = (index: number) => {
    addItemInventory({
      productId: id,
      quantity: 1
    });
    row[index].close();
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={() => <RightSwipe index={index} onGiftPressed={onAddGift} onBuyPressed={onBuyAdd} />} friction={2} rightThreshold={30} ref={(ref) => (row[index] = ref)}>
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
                <SimpleLineIcons name="drop" size={16} color={COLORS.textLight} />
                <Text style={styles.volumeText}>
                  {volume} {getUnitVolume(volumeUnit)}
                </Text>
              </View>
              <View style={styles.productPrice}>
                <Ionicons name="ios-pricetag-outline" size={16} color={COLORS.textLight} />
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
    height: 120,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8
  },
  warning: {
    backgroundColor: COLORS.warning
  },
  primary: {
    backgroundColor: COLORS.accent
  },
  rightSwipeItemContainer: {
    width: 100,
    marginHorizontal: 'auto',
    alignItems: 'center'
  },
  rightSwipeIcon: {
    color: COLORS.white,
    fontSize: 32,
    marginBottom: 10
  },
  rightSwipeText: {
    color: COLORS.white
  }
});
