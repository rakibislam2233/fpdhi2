import { baseApi } from "./baseApi";

// Data and MIS Forms API
export const dataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Data value sets
    getDataValueSets: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams(params);
        return `/api/dataValueSets?${queryParams}`;
      },
      providesTags: ["DataValue"],
    }),

    // Post data value sets
    postDataValueSets: builder.mutation({
      query: (body) => ({
        url: "/api/dataValueSets",
        method: "POST",
        body,
      }),
      invalidatesTags: ["DataValue"],
    }),
    // MIS Form specific endpoints
    getMis4Data: builder.query({
      query: ({ orgUnitId, period }) =>
        `/api/dataValueSets?orgUnit=${orgUnitId}&period=${period}&dataSet=${
          import.meta.env.VITE_MIS4_DATASET_ID
        }`,
      providesTags: ["MisForm"],
    }),
    getMis5Data: builder.query({
      query: ({ orgUnitId, period }) =>
        `/api/dataValueSets?orgUnit=${orgUnitId}&period=${period}&dataSet=${
          import.meta.env.VITE_MIS5_DATASET_ID
        }`,
      providesTags: ["MisForm"],
    }),

    // Additional dataset endpoints
    getMis2DataSet: builder.query({
      query: ({ orgUnitId, period }) => {
        // orgUnitId এখন "&orgUnit=xxx&orgUnit=yyy" format এ আসবে
        return `/api/29/dataValueSets.json?dataSet=${
          import.meta.env.VITE_MIS2_DATASET_ID
        }&period=${period}${orgUnitId}`; // concat করলাম
      },
      providesTags: ["MisForm"],
    }),

    getMis3DataSet: builder.query({
      query: ({ orgUnitId, period }) => {
        return `/api/29/dataValueSets.json?dataSet=${
          import.meta.env.VITE_MIS3_DATASET_ID
        }&period=${period}${orgUnitId}`;
      },
      providesTags: ["MisForm"],
    }),
  }),
});

export const {
  useGetDataValueSetsQuery,
  usePostDataValueSetsMutation,
  useGetMis4DataQuery,
  useGetMis5DataQuery,
  useGetMis2DataSetQuery,
  useGetMis3DataSetQuery,
} = dataApi;
