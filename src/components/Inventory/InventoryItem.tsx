import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../../constants';
import { numberWithCommas } from '../../utils/masks';
import { useRemoveItemsFromInventoryMutation } from '../../services/inventory';

interface InventoryItemProps {
  title: string;
  imgUrl?: string;
  itemAmount: number;
  code: string;
  price: string;
  productId: string;
}

const { width: screenWidth } = Dimensions.get('screen');

const InventoryItem: FC<InventoryItemProps> = ({ title, productId, imgUrl, itemAmount, code, price }) => {
  const [removeItemsFromInventory] = useRemoveItemsFromInventoryMutation();

  const deleteProductHandler = () => {
    const payload = {
      productId,
      itemAmount,
      isDelete: true
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
            <Text style={styles.mainInfoText}>Количество: {itemAmount}</Text>
            <Text style={styles.mainInfoText}>Код: #{code}</Text>
          </View>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>{numberWithCommas(Number(price) * itemAmount)} UZS</Text>
          </View>
        </View>
        <View style={styles.buttonToolkit}>
          <Pressable>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Изменить</Text>
            </View>
          </Pressable>
          <Pressable onPress={deleteProductHandler}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Удалить</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default InventoryItem;

const styles = StyleSheet.create({
  inventoryItemContainer: {
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  imageContainer: {
    width: 80,
    height: 'auto'
  },
  image: {
    flex: 1,
    height: undefined,
    width: '100%'
  },
  infoContainer: {
    marginLeft: 20,
    flex: 1,
    height: '100%',
    justifyContent: 'space-between'
  },
  titleContainer: {},
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
  buttonToolkit: {
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
  }
});
