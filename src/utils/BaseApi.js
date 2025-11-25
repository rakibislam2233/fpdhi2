const BASE_API = "/api/";

// eslint-disable-next-line import/prefer-default-export
export const API_CONSTANT_MAP = {
  import_ss_mis2_get_org: (dataSetId) =>
    `${BASE_API}organisationUnits?userOnly=true&fields=id,name,code,dataSets,displayName&filter=dataSets.id:eq:${dataSetId}&paging=false/`,
  // import_ss_mis3_get_org: (dataSetId) => (`${BASE_API}organisationUnits?userOnly=true&fields=id,name,code,dataSets,displayName&filter=displayName:like:(UH&FWC)&filter=displayName:like:(RD))&filter=displayName:like:(MCH-FP Unit)&filter=displayName:like:(MCWC)&paging=false&rootJunction=OR`),
  import_ss_mis3_get_org: (dataSetId) =>
    `${BASE_API}organisationUnits/?userOnly=true&fields=id,name,code,dataSets,displayName&filter=dataSets.id:eq:${import.meta.env.VITE_MIS3_DATASET_ID}`,
  export_ss_dhis2: `${BASE_API}dataValueSets`,
  // import_ss_get_data: 'http://dgfpmis.org/dhis2/get_data.php',http://mchdrhis.icddrb.org:8091/emis2dhis2/interoperability/api/get-ss-data/
  // http://localhost:8000/interoperability/api/get-ss-data/, http://192.168.1.2:8080
  import_ss_get_data:
    "http://103.48.19.10:8091/interoperability/api/get-ss-data/",
};
