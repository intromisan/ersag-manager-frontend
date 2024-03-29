import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://ersag-manager.herokuapp.com/api',
  prepareHeaders: async (headers) => {
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    const refreshToken = await AsyncStorage.getItem('refreshToken');

    if (refreshToken) {
      headers.set('x-refresh', refreshToken);
    }

    return headers;
  }
});
