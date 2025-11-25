import { apiDev } from "./";

const zillaUrl =
  "/api/29/organisationUnits?level=3&paging=false&fields=id,name&filter=name:like:District";

export function fetchZillas() {
  return (dispatch) => {
    return dispatch({
      type: "FETCH_ZILLAS",
      payload: apiDev.get(zillaUrl),
    });
  };
}

export function fetchZillaByUser() {
  return (dispatch) => {
    return dispatch({
      type: "FETCH_ZILLA_BY_USER",
      payload: apiDev.get(
        "/api/29/organisationUnits?userOnly=true&paging=false"
      ),
    });
  };
}

export function fetchUpazilaByUser() {
  return (dispatch) => {
    return dispatch({
      type: "FETCH_UPAZILA_BY_USER",
      payload: apiDev.get(
        "/api/29/organisationUnits?userDataViewOnly=true&paging=false"
      ),
    });
  };
}

export function fetchUpazillasByParent(parentId) {
  return (dispatch) => {
    const upazilaByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:4&paging=false&fields=id,name&filter=name:like:Upazila";
    return dispatch({
      type: "FETCH_UPAZILAS_BY_PARENT",
      payload: apiDev.get(upazilaByParent),
    });
  };
}

export function fetchUnionsByParent(parentId) {
  return (dispatch) => {
    const unionsByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Union";
    return dispatch({
      type: "FETCH_UNIONS_BY_PARENT",
      payload: apiDev.get(unionsByParent),
    });
  };
}

export function fetchPouroshovasByParent(parentId) {
  return (dispatch) => {
    const pouroshovaByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Pouroshova";
    return dispatch({
      type: "FETCH_POUROSHOVA_BY_PARENT",
      payload: apiDev.get(pouroshovaByParent),
    });
  };
}

export function fetchSadarByParent(parentId) {
  return (dispatch) => {
    const sadarByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Sadar";
    return dispatch({
      type: "FETCH_SADAR_BY_PARENT",
      payload: apiDev.get(sadarByParent),
    });
  };
}

export function fetchGovByParent(parentId) {
  return (dispatch) => {
    const govByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:(Gov)";
    return dispatch({
      type: "FETCH_GOV_BY_PARENT",
      payload: apiDev.get(govByParent),
    });
  };
}

export function fetchNgosByParent(parentId) {
  return (dispatch) => {
    const ngosByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:(NGO)";
    return dispatch({
      type: "FETCH_NGOS_BY_PARENT",
      payload: apiDev.get(ngosByParent),
    });
  };
}

export function fetchMultiSectoralsByParent(parentId) {
  return (dispatch) => {
    const multiSectoralsByParent =
      "/api/29/organisationUnits?filter=parent.id:eq:" +
      parentId +
      "&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:(Multi-sectoral)";
    return dispatch({
      type: "FETCH_MULTISECTORAL_BY_PARENT",
      payload: apiDev.get(multiSectoralsByParent),
    });
  };
}
