import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/products';
import UserReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: UserReducer,
  [productsApi.reducerPath]: productsApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
