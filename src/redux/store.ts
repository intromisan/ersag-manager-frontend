import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { financesApi } from '../services/finances';
import { inventoryApi } from '../services/inventory';
import { productsApi } from '../services/products';
import { userApi } from '../services/user';
import UserReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: UserReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  // [financesApi.reducerPath]: financesApi.reducer,
  [inventoryApi.reducerPath]: inventoryApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productsApi.middleware,
        userApi.middleware,
        //  financesApi.middleware,
        inventoryApi.middleware
      )
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
