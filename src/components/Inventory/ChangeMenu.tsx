import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../constants';

const { width: screenWidth } = Dimensions.get('screen');

const ChangeMenu = () => {
  const [quantity, setQuantity] = useState('');
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
        <Pressable>
          <View style={styles.buttonContainer}>
            <FontAwesome name="dollar" size={18} color={COLORS.white} />
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.buttonContainer, styles.buttonWarningContainer]}>
            <FontAwesome name="gift" size={18} color={COLORS.white} />
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.buttonContainer, styles.buttonAccentContainer]}>
            <FontAwesome name="trash" size={18} color={COLORS.white} />
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
