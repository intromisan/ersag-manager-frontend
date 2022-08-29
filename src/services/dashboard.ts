import { IDashboardData } from '../interfaces/finance';
import { appApi } from './appApi';

export const dashboardApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getFinance: build.query<IDashboardData, void>({
      query: () => '/dashboard',
      providesTags: ['Dashboard']
    })
  })
});

export const { useGetFinanceQuery } = dashboardApi;
