import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { FC, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { numberWithCommas } from '../../utils/masks';

const { width: screenWidth } = Dimensions.get('screen');

interface ChangeMenuProps {
  onDelete: (deleteAmount: number) => void;
  onGift: (giftAmount: number) => void;
  onSale: (saleAmount: number, salePrice: number) => void;
}

const ChangeMenu: FC<ChangeMenuProps> = ({ onDelete, onGift, onSale }) => {
  const [quantity, setQuantity] = useState('1');
  const [sellPrice, setSellPrice] = useState('');

  const [quantityBorderColor, setQuantityBorderColor] = useState(COLORS.borderColor);
  const [sellPriceBorderColor, setSellPriceBorderColor] = useState(COLORS.borderColor);

  return (
    <View style={styles.changeManuContainer}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Количество:</Text>
          <TextInput
            keyboardType="number-pad"
            style={{ ...styles.input, borderColor: quantityBorderColor }}
            onFocus={() => setQuantityBorderColor(COLORS.accent)}
            onBlur={() => setQuantityBorderColor(COLORS.borderColor)}
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Цена:</Text>
          <TextInput
            keyboardType="number-pad"
            style={{ ...styles.input, borderColor: sellPriceBorderColor }}
            onFocus={() => setSellPriceBorderColor(COLORS.accent)}
            onBlur={() => setSellPriceBorderColor(COLORS.borderColor)}
            value={sellPrice}
            onChangeText={(text) => setSellPrice(text)}
          />
        </View>
      </View>
      <View style={styles.buttonToolbar}>
        <Pressable onPress={() => onSale(Number(quantity), Number(sellPrice))}>
          <View style={styles.buttonContainer}>
            <Feather name="dollar-sign" size={18} color={COLORS.white} />
          </View>
        </Pressable>
        <Pressable onPress={() => onGift(Number(quantity))}>
          <View style={[styles.buttonContainer, styles.buttonWarningContainer]}>
            <Feather name="gift" size={18} color={COLORS.white} />
          </View>
        </Pressable>
        <Pressable onPress={() => onDelete(Number(quantity))}>
          <View style={[styles.buttonContainer, styles.buttonAccentContainer]}>
            <Feather name="trash" size={18} color={COLORS.white} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ChangeMenu;

const styles = StyleSheet.create({
  changeManuContainer: {
    paddingVertical: 10
  },
  buttonToolbar: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  buttonContainer: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: screenWidth * 0.15,
    borderRadius: 3,
    backgroundColor: COLORS.success,
    borderColor: COLORS.success
  },
  buttonWarningContainer: {
    borderColor: COLORS.warning,
    backgroundColor: COLORS.warning
  },
  buttonAccentContainer: {
    borderColor: COLORS.accent,
    backgroundColor: COLORS.accent
  },
  buttonText: {
    color: COLORS.accent,
    fontWeight: '700'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputLabel: {
    // width: '50%'
  },
  input: {
    paddingLeft: 20,
    height: 30,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginLeft: 20,
    width: 100
  }
});
