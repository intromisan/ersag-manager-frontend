import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../redux/store';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://ersag-manager.azurewebsites.net/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.userToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});
