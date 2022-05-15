import { createApi } from "@reduxjs/toolkit/query/react";
import { Product } from "../interfaces";
import { baseQuery } from "./baseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQuery,
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/Products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
