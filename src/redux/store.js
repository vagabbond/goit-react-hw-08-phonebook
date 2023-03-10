import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { slice } from './slicePhoneBook';
import { sliceFilter } from './sliceFilter';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: slice.reducer,
    filter: sliceFilter.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});

export const persistor = persistStore(store);