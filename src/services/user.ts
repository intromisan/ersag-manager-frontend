import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { IUser } from '../interfaces';
import { baseQuery } from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser, void>({
      query: () => '/users'
    })
  })
});

export const { useGetUsersQuery } = userApi;
