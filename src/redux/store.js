import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from './api/baseApi';
import navbarSlice from './slices/navbarSlice';
import d2uiSlice from './reducers/d2ui.ref.reducers';
import geoSlice from './reducers/getgeo.reducers';
import misFormSlice from './reducers/misform.reducers';
import importSsSlice from './reducers/import.ss.reducer';
import testApiSlice from './reducers/test.api.reducer';

const store = configureStore({
  reducer: {
    navBar: navbarSlice,
    d2ui: d2uiSlice,
    getgeo: geoSlice,
    misform4aggr: misFormSlice,
    testapireducer: testApiSlice,
    importssreducer: importSsSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'FETCH_ZILLAS',
          'FETCH_ZILLAS_PENDING',
          'FETCH_ZILLAS_FULFILLED',
          'FETCH_ZILLAS_REJECTED',
          'FETCH_ZILLA_BY_USER',
          'FETCH_ZILLA_BY_USER_PENDING',
          'FETCH_ZILLA_BY_USER_FULFILLED',
          'FETCH_ZILLA_BY_USER_REJECTED',
          'FETCH_UPAZILA_BY_USER',
          'FETCH_UPAZILA_BY_USER_PENDING',
          'FETCH_UPAZILA_BY_USER_FULFILLED',
          'FETCH_UPAZILA_BY_USER_REJECTED',
          'FETCH_UPAZILAS_BY_PARENT',
          'FETCH_UPAZILAS_BY_PARENT_PENDING',
          'FETCH_UPAZILAS_BY_PARENT_FULFILLED',
          'FETCH_UPAZILAS_BY_PARENT_REJECTED',
          'FETCH_UNIONS_BY_PARENT',
          'FETCH_UNIONS_BY_PARENT_PENDING',
          'FETCH_UNIONS_BY_PARENT_FULFILLED',
          'FETCH_UNIONS_BY_PARENT_REJECTED',
          'FETCH_POUROSHOVA_BY_PARENT',
          'FETCH_POUROSHOVA_BY_PARENT_PENDING',
          'FETCH_POUROSHOVA_BY_PARENT_FULFILLED',
          'FETCH_POUROSHOVA_BY_PARENT_REJECTED',
          'FETCH_SADAR_BY_PARENT',
          'FETCH_SADAR_BY_PARENT_PENDING',
          'FETCH_SADAR_BY_PARENT_FULFILLED',
          'FETCH_SADAR_BY_PARENT_REJECTED',
          'FETCH_GOV_BY_PARENT',
          'FETCH_GOV_BY_PARENT_PENDING',
          'FETCH_GOV_BY_PARENT_FULFILLED',
          'FETCH_GOV_BY_PARENT_REJECTED',
          'FETCH_NGOS_BY_PARENT',
          'FETCH_NGOS_BY_PARENT_PENDING',
          'FETCH_NGOS_BY_PARENT_FULFILLED',
          'FETCH_NGOS_BY_PARENT_REJECTED',
          'FETCH_MULTISECTORAL_BY_PARENT',
          'FETCH_MULTISECTORAL_BY_PARENT_PENDING',
          'FETCH_MULTISECTORAL_BY_PARENT_FULFILLED',
          'FETCH_MULTISECTORAL_BY_PARENT_REJECTED',
        ],
        ignoredPaths: ['getgeo.loading', 'getgeo.error', 'd2ui.loading', 'd2ui.error'],
      },
    }).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
