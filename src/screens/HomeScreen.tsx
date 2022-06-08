import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import FinanceInfoCard from '../components/FinanceInfoCard';
import { useGetFinanceQuery } from '../services/inventory';

const HomeScreen = () => {
  const { data: finances } = useGetFinanceQuery();
  return (
    <PageContainer title="Главная">
      <ScrollView horizontal>
        <FinanceInfoCard index={0} header="Общий баланс" subheader="Май 2022" number={finances?.balance} numberMark="UZS" />
        <FinanceInfoCard index={1} header="Ценность инвентаря" subheader="Май 2022" number={finances?.inventoryTotalValue} numberMark="UZS" />
        <FinanceInfoCard index={2} header="Торговая скидка" subheader="Май 2022" number={finances?.discountPercentage} numberMark="%" />
      </ScrollView>
    </PageContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
