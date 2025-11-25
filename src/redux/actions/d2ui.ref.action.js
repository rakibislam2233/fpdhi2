import { apiDev } from "./";
import { addD2uiReference as addD2uiReferenceAction, getD2uiReference as getD2uiReferenceAction, setUserDataViewZillaCode } from '../store/reducers/d2ui.ref.reducers';

export function addD2uiReference(d2uireference) {
  return async (dispatch) => {
    return dispatch(addD2uiReferenceAction(d2uireference));
  };
}

export function getD2uiReference() {
  return (dispatch) => {
    return dispatch(getD2uiReferenceAction());
  };
}

export function getD2Upazila() {
  return (dispatch) => {
    return apiDev.get(
      "/api/organisationUnits?userDataViewOnly=true&level=3&fields=id,name,code,displayName&paging=false"
    ).then(response => {
      dispatch(setUserDataViewZillaCode(response.data));
      return response;
    });
  };
}
