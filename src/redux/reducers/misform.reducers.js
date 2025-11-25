import _ from "underscore";
import { mis4serializer, mis5Extractor } from "../../utils/DataSerializer.jsx";

const initialState = {
  mis4aggrdata: [],
  mis4aggrindicators: [],
  mis4aggrdatango: [],
  mis4aggrdatamultisectoral: [],
  mis5aggrdata: {},
  mis5FinalData: [],
  mis5ZillaName: "",
  mis5Month: "",
  zilla: "",
  upazila: "",
  month: "",
  loading: false,
  message: {},
  printcontent: "",
  header: "",
  //FOR MIS2 AND MIS3 AGGR
  period: "",
  mis2reportdata: [],
  mis3reportdata: [],
  userOrgUnits: [],
  userDataViewZilla: "",
  mis4FinalDataAggr: {},
  mis5ReportMIS2: [],
  mis5ReportMIS3: [],
  mis5ReportFinal: {
    mis5: [],
    zillaName: "",
    period: "",
  },
};

const misform4aggr = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MIS4_AGGR_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS4_AGGR_FULFILLED": {
      // var data = _.keys(action.payload.data).length ? action.payload.data.dataValues : [];
      let data = _.has(action.payload.data, "dataValues")
        ? action.payload.data.dataValues
        : [];
      console.log("misform.reducers", _.has(action.payload.data, "dataValues"));
      if (data.length > 0) {
        data = mis4serializer(data, true, "সরকারি সংস্থার মোট");
      }
      return {
        ...state,
        loading: false,
        mis4aggrdata: data,
      };
    }
    case "FETCH_MIS4_AGGR_REJECTED": {
      return {
        ...state,
        loading: false,
        mis4aggrdata: [],
      };
    }
    case "FETCH_MIS4_INDICATORS_AGGR_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS4_INDICATORS_AGGR_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        mis4aggrindicators: [],
      };
    }
    case "FETCH_MIS4_INDICATORS_AGGR_REJECTED": {
      return {
        ...state,
        loading: false,
        mis4aggrindicators: [],
      };
    }

    case "FETCH_MIS4_NGOS_AGGR_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS4_NGOS_AGGR_FULFILLED": {
      // console.log(action.payload);
      let data =
        _.keys(action.payload.data).length &&
        _.has(action.payload.data, "dataValues")
          ? action.payload.data.dataValues
          : [];
      if (data.length > 0) {
        data = mis4serializer(data, true, "অসরকারি সংস্থার মোট");
      }
      return {
        ...state,
        loading: false,
        mis4aggrdatango: data,
      };
    }
    case "FETCH_MIS4_NGOS_AGGR_REJECTED": {
      return {
        ...state,
        loading: false,
        mis4aggrdatango: [],
      };
    }
    case "FETCH_MIS4_MULTISECTORAL_AGGR_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS4_MULTISECTORAL_AGGR_FULFILLED": {
      let data =
        _.keys(action.payload.data).length &&
        _.has(action.payload.data, "dataValues")
          ? action.payload.data.dataValues
          : [];
      if (data.length > 0) {
        data = mis4serializer(data, true, "বহুমুখী সংস্থার মোট");
      }
      return {
        ...state,
        loading: false,
        mis4aggrdatamultisectoral: data,
      };
    }
    case "FETCH_MIS4_MULTISECTORAL_AGGR_REJECTED": {
      return {
        ...state,
        loading: false,
        mis4aggrdatamultisectoral: [],
      };
    }
    case "MERGE_WITH_MIS4_TOTAL": {
      let data = _.last(action.payload);
      // console.log("state.mis4aggrdata", state.mis4aggrdata, action.payload, data);
      let modifedmis4aggrdata = state.mis4aggrdata;
      modifedmis4aggrdata.push(data);
      // Push with existing system
      return {
        ...state,
        mis4aggrdata: modifedmis4aggrdata,
      };
    }
    case "SET_REPORT_HEADER": {
      return {
        ...state,
        zilla: action.zilla,
        upazila: action.upazila,
        month: action.month,
      };
    }
    case "SET_IFRAME_CONTENT": {
      return {
        ...state,
        printcontent: action.printcontent,
        header: action.head,
      };
    }
    case "RESET_IFRAME_CONTENT": {
      return {
        ...state,
        printcontent: action.printcontent,
      };
    }
    case "FETCH_MIS5_AGGR_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS5_AGGR_FULFILLED": {
      return {
        ...state,
        loading: false,
        mis5aggrdata: action.payload,
      };
    }
    case "SET_MIS5_AGGR": {
      console.log(action);
      return {
        ...state,
        mis5FinalData: action.payload,
        mis5ZillaName: action.zillaName,
        mis5Month: action.mis5Month,
      };
    }
    case "FETCH_MIS4_ORGUNIT_BY_USER_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS4_ORGUNIT_BY_USER_FULFILLED": {
      return {
        ...state,
        loading: false,
        userOrgUnits: action.payload.data.organisationUnits,
      };
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //                                      MIS2 AND MIS3 AGGR
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    case "FETCH_MIS4_ORGUNIT_ZILLA_BY_USER_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS4_ORGUNIT_ZILLA_BY_USER_FULFILLED": {
      return {
        ...state,
        loading: false,
        userDataViewZilla: action.payload.data.organisationUnits[0].name,
      };
    }
    case "FETCH_MIS2_REPORT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS2_REPORT_FULFILLED": {
      return {
        ...state,
        loading: false,
        mis2reportdata: action.payload.data.dataValues,
      };
    }
    case "FETCH_MIS3_REPORT_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS3_REPORT_FULFILLED": {
      return {
        ...state,
        loading: false,
        mis3reportdata: action.payload.data.dataValues,
      };
    }
    case "ADD_MIS4_DATASET_AGGR": {
      return {
        ...state,
        mis4FinalDataAggr: action.payload,
      };
    }
    //fetch MIS5
    case "FETCH_MIS5_MIS2_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS5_MIS2_FULFILLED": {
      var report = action.payload;
      var dataMIS2 = mis5Extractor(report);
      console.log("DataMiS2", dataMIS2);
      return {
        ...state,
        loading: false,
        mis5ReportMIS2: dataMIS2,
      };
    }
    //fetch MIS5
    case "FETCH_MIS5_MIS3_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_MIS5_MIS3_FULFILLED": {
      var report2 = action.payload;
      var dataMIS3 = mis5Extractor(report2);
      console.log("Data mis3", dataMIS3);
      return {
        ...state,
        loading: false,
        mis5ReportMIS3: dataMIS3,
      };
    }
    case "SET_MIS5_MIS2_MIS3": {
      var mis2 = action.mis2,
        mis3 = action.mis3,
        zillaName = action.zillaName,
        period = action.period;
      var c = _.map(mis2, (element) => {
        var r = _.findWhere(mis3, { orgUnit: element.orgUnit });
        return _.extend(element, r);
      });
      console.log("mis2:", mis2);
      console.log("mis3:", mis3);
      console.log("Merged result (c):", c);
      var result = {
        mis5: c,
        zillaName: zillaName,
        period: period,
      };
      // console.log(mis2, mis3, c, Object.keys(c[0]).length, Object.keys(mis2[0]).length, Object.keys(mis3[0]).length);
      return {
        ...state,
        loading: false,
        mis5ReportFinal: result,
      };
    }
    default:
      return state;
  }
};

export default misform4aggr;
