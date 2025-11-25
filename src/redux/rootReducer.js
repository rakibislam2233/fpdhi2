import { combineReducers } from '@reduxjs/toolkit';
import navbarSlice from './slices/navbarSlice';
import d2uiSlice from './slices/d2uiSlice';
import geoSlice from './slices/geoSlice';
import misFormSlice from './slices/misFormSlice';
import importSsSlice from './slices/importSsSlice';
import testApiSlice from './slices/testApiSlice';

const rootReducer = combineReducers({
  navBar: navbarSlice,
  d2ui: d2uiSlice,
  getgeo: geoSlice,
  misform4aggr: misFormSlice,
  testapireducer: testApiSlice,
  importssreducer: importSsSlice,
});

export default rootReducer;