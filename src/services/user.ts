import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { IUser } from '../interfaces';
import { baseQuery } from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    createUser: builder.mutation<IUser, IUser>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body: body
      })
    }),
    getHealth: builder.query<any, void>({
      query: () => '/healthcheck'
    })
  })
});

export const { useCreateUserMutation, useGetHealthQuery } = userApi;
