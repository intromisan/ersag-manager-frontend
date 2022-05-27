import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import PageContainer from '../components/PageContainer';
import ProductItem from '../components/ProductItem';
import SearchComponent from '../components/SearchComponent';
import { useGetProductsQuery } from '../services/products';

const tempData = [
  {
    _id: '1',
    name: 'Гель для душа',
    code: '125',
    volume: '1000 мл',
    price: '100000',
    withDevice: false,
    image: 'https://dosya.ersag.com.tr/upload/image/products/125.jpg'
  },
  {
    _id: '2',
    name: 'Стиральный порошок для белого белья',
    code: '101',
    volume: '1000 гр',
    price: '120000',
    withDevice: false,
    image: 'https://dosya.ersag.com.tr/upload/image/products/101.jpg'
  },
  {
    _id: '3',
    name: 'Жидкость для посуды (яблоко)',
    code: '255',
    volume: '1000 мл',
    price: '90000',
    withDevice: true,
    image: 'https://dosya.ersag.com.tr/upload/image/products/255yeni.jpg'
  },
  {
    _id: '4',
    name: 'Стиральный порошок для цветного белья',
    code: '102',
    volume: '1000 гр',
    price: '120000',
    withDevice: false,
    image: 'https://dosya.ersag.com.tr/upload/image/products/102.jpg'
  },
  {
    _id: '5',
    name: 'Антижир',
    code: '114',
    volume: '1000 мл',
    price: '90000',
    withDevice: false,
    image: 'https://dosya.ersag.com.tr/upload/image/products/114.jpg'
  },
  {
    _id: '6',
    name: 'Детский шампунь',
    code: '163',
    volume: '300 мл',
    price: '130000',
    withDevice: false,
    image: 'https://dosya.ersag.com.tr/upload/image/products/163.jpg'
  }
];

const CatalogScreen = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <PageContainer title={'Каталог'}>
      <SearchComponent />
      {isLoading ? <Text>Loading</Text> : <FlatList showsVerticalScrollIndicator={false} data={tempData} keyExtractor={(item) => item._id} renderItem={({ item }) => <ProductItem {...item} />} />}
    </PageContainer>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({});
