import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { IUserSession, IUser } from '../interfaces/User';
import { baseQuery } from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (build) => ({
    createUser: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body: body
      })
    }),
    createUserSession: build.mutation<IUserSession, Partial<IUser>>({
      query: (body) => ({
        url: '/sessions',
        method: 'POST',
        body: body
      })
    })
  })
});

export const { useCreateUserMutation, useCreateUserSessionMutation } = userApi;
