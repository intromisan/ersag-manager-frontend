import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import FinanceInfoCard from '../components/Finance/FinanceInfoCard';
import { useGetFinanceQuery } from '../services/dashboard';
import { PrimaryButton } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../utils/hooks';
import { onSignOut } from '../redux/slices/userSlice';

const HomeScreen = () => {
  const { data: finances, refetch, isFetching } = useGetFinanceQuery();
  const dispatch = useAppDispatch();
  const exitHandler = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    dispatch(onSignOut());
  };
  return (
    <PageContainer title="Главная">
      <ScrollView horizontal refreshControl={<RefreshControl onRefresh={refetch} refreshing={isFetching} />}>
        <FinanceInfoCard index={0} header="Общий баланс" subheader="Май 2022" number={finances?.userBalance} numberMark="UZS" />
        <FinanceInfoCard index={1} header="Ценность инвентаря" subheader="Май 2022" number={finances?.inventoryTotalValue} numberMark="UZS" />
        <FinanceInfoCard index={2} header="Торговая скидка" subheader="Май 2022" number={finances && finances.userDiscount * 100} numberMark="%" />
      </ScrollView>
      <PrimaryButton text="Выход" pressHandler={exitHandler} />
    </PageContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
