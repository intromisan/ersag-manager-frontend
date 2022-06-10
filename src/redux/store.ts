import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appApi } from '../services/appApi';
import { userApi } from '../services/user';
import UserReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: UserReducer,
  [userApi.reducerPath]: userApi.reducer,
  [appApi.reducerPath]: appApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, appApi.middleware)
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
