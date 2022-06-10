import { IFinance } from '../interfaces/finance';
import { appApi } from './appApi';

export const financesApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getFinance: build.query<IFinance, void>({
      query: () => '/finance',
      providesTags: ['Finances']
    })
  })
});

export const { useGetFinanceQuery } = financesApi;
