import { combineReducers } from 'redux';
import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { persistStore } from 'redux-persist';
import { AxiosResponse } from 'axios';

import { restApi, errorHandler } from '@/api';

export const store = createStore({ extensions: [getSagaExtension({})] });

export const { dispatch } = store;

export const persistor = persistStore(store);

const reducer = combineReducers({});

export type StoreType = ReturnType<typeof reducer>;

restApi.interceptors.response.use(
  ({ data }: AxiosResponse) => data,
  (error) => errorHandler(error)
);
