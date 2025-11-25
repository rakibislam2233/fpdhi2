import { baseApi } from "./baseApi";

// Import Service Statistics API
export const importSSApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get organisation units for SS import
    getOrgUnitsForSS: builder.query({
      query: (datasetId) =>
        `/api/organisationUnits?userOnly=true&fields=id,name,code,dataSets,displayName&filter=dataSets.id:eq:${datasetId}&paging=false/`,
      providesTags: ["ImportSS"],
    }),

    // Get MIS3 organisation units for SS import
    getOrgUnitsForMIS3: builder.query({
      query: () =>
        `/api/organisationUnits/?userOnly=true&fields=id,name,code,dataSets,displayName&filter=dataSets.id:eq:${
          import.meta.env.VITE_MIS3_DATASET_ID
        }`,
      providesTags: ["ImportSS"],
    }),

    // Get SS data
    getSSData: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams(params);
        return `http://103.48.19.10:8091/interoperability/api/get-ss-data/?${queryParams}`;
      },
      providesTags: ["ImportSS"],
    }),

    // Send data to DHIS2
    sendToDhis2: builder.mutation({
      query: (body) => ({
        url: "/api/dataValueSets",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ImportSS"],
    }),

    // Enable loading action (for UI state)
    enableLoading: builder.mutation({
      query: () => ({
        url: "/dummy", // This will be handled locally
        method: "POST",
        body: {},
      }),
    }),

    // Disable loading action (for UI state)
    disableLoading: builder.mutation({
      query: () => ({
        url: "/dummy", // This will be handled locally
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const {
  useGetOrgUnitsForSSQuery,
  useGetOrgUnitsForMIS3Query,
  useGetSSDataQuery,
  useSendToDhis2Mutation,
  useEnableLoadingMutation,
  useDisableLoadingMutation,
} = importSSApi;
