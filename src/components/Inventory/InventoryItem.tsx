import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { COLORS } from '../../constants';
import { numberWithCommas } from '../../utils/masks';
import { useRemoveItemsFromInventoryMutation } from '../../services/inventory';
import ChangeMenu from './ChangeMenu';

interface InventoryItemProps {
  title: string;
  imgUrl?: string;
  quantity: number;
  code: string;
  price: number;
  productId: string;
}

const { width: screenWidth } = Dimensions.get('screen');

const InventoryItem: FC<InventoryItemProps> = ({ title, productId, imgUrl, quantity, code, price }) => {
  const [isChangeOpen, setIsChangeOpen] = useState(false);

  const [removeItemsFromInventory] = useRemoveItemsFromInventoryMutation();

  const deleteProductHandler = (deleteAmount: number) => {
    const payload = {
      productId,
      quantity: deleteAmount,
      isDelete: true
    };
    removeItemsFromInventory(payload);
  };

  const giftProductHandler = (giftAmount: number) => {
    const payload = {
      productId,
      quantity: giftAmount,
      isGift: true
    };
    removeItemsFromInventory(payload);
  };

  const saleProductHandler = (saleAmount: number, salePrice: number) => {
    const payload = {
      productId,
      quantity: saleAmount,
      price: salePrice
    };
    removeItemsFromInventory(payload);
  };

  return (
    <View style={styles.inventoryItemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.titleText}>
            {title}
          </Text>
        </View>
        <View style={styles.mainInfoContainer}>
          <View>
            <Text style={styles.mainInfoText}>Количество: {quantity}</Text>
            <Text style={styles.mainInfoText}>Код: #{code}</Text>
          </View>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>{numberWithCommas(Number(price) * quantity)} UZS</Text>
          </View>
        </View>
        {isChangeOpen && <ChangeMenu onDelete={deleteProductHandler} onGift={giftProductHandler} onSale={saleProductHandler} />}
        <View style={styles.changeContainer}>
          <View style={styles.halfSeparator}></View>
          <Pressable onPress={() => setIsChangeOpen(!isChangeOpen)}>
            <Text style={styles.changeText}>{isChangeOpen ? 'Меньше' : 'Больше'}</Text>
          </Pressable>
          <View style={styles.halfSeparator}></View>
        </View>
      </View>
    </View>
  );
};

export default InventoryItem;

const styles = StyleSheet.create({
  inventoryItemContainer: {
    flexDirection: 'row',
    paddingVertical: 20
  },
  imageContainer: {
    width: screenWidth * 0.2,
    maxHeight: 110
  },
  image: {
    flex: 1,
    width: '100%'
  },
  infoContainer: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  titleContainer: {
    height: 40
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700'
  },
  mainInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalPriceContainer: {
    justifyContent: 'flex-end'
  },
  totalPriceText: {
    fontWeight: '700',
    fontSize: 15
  },
  mainInfoText: {
    fontSize: 13,
    color: COLORS.textLight
  },
  changeContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  buttonContainer: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: screenWidth * 0.3,
    borderColor: COLORS.accent,
    borderRadius: 3
  },
  buttonText: {
    color: COLORS.accent,
    fontWeight: '700'
  },
  halfSeparator: {
    height: 1,
    width: '30%',
    backgroundColor: COLORS.accent
  },
  changeText: {
    marginHorizontal: 10,
    color: COLORS.accent,
    fontWeight: '600'
  }
});
