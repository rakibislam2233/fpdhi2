import { combineReducers } from "redux";

import navBarReducer from "../../redux/slices/navbarSlice";
import d2uiReducer from "./d2ui.ref.reducers";
import getgeo from "./getgeo.reducers";
import misform4aggr from "./misform.reducers";
import importssreducer from "./import.ss.reducer";
import testapireducer from "./test.api.reducer";

const reducers = combineReducers({
  navBar: navBarReducer,
  d2ui: d2uiReducer,
  getgeo: getgeo,
  misform4aggr: misform4aggr,
  testapireducer: testapireducer,
  importssreducer: importssreducer,
});

export default reducers;
