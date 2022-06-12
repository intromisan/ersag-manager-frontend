import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../../constants';
import { numberWithCommas } from '../../utils/masks';

interface FinanceInfoCardProps {
  index: number;
  header: string;
  subheader: string;
  number?: number;
  numberMark: string;
}

const { height, width } = Dimensions.get('screen');

const FinanceInfoCard: FC<FinanceInfoCardProps> = ({ index, header, subheader, number, numberMark }) => {
  return (
    <View style={[styles.cardContainer, index === 0 && styles.cardContainerFirstChild, index === -1 && styles.cardContainerLastChild]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header} numberOfLines={2}>
          {header}
        </Text>
        <Text style={styles.subheader}>{subheader}</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>
          {number && numberWithCommas(number)} {numberMark}
        </Text>
      </View>
    </View>
  );
};

export default FinanceInfoCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.borderColor,
    height: 150,
    width: width * 0.7,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },
  cardContainerFirstChild: {
    marginLeft: 0
  },
  cardContainerLastChild: {
    marginRight: 0
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    color: COLORS.headlineColor,
    fontWeight: '700',
    letterSpacing: 0.7,
    marginBottom: 5
  },
  subheader: {
    fontSize: 12,
    color: COLORS.textLight,
    letterSpacing: 0.3
  },
  numberContainer: {},
  number: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.accent
  }
});
