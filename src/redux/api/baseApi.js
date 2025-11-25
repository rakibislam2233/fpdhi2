import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API with common configuration
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DHIS2_BASE_URL || "http://localhost:8080",
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  tagTypes: [
    "OrganisationUnits",
    "DataValueSets",
    "Zillas",
    "Upazillas",
    "Unions",
    "Pouroshovas",
    "Sadar",
    "Gov",
    "Ngo",
    "MultiSectoral",
    "Report",
    "MisFormData",
    "ImportSS",
    "TestApi",
  ],
  endpoints: (builder) => ({
    // Organisation Units endpoints
    getOrganisationUnits: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams(params);
        return `/api/organisationUnits?${queryParams}`;
      },
      providesTags: ["OrganisationUnits"],
    }),

    // Organisation Units by level
    getOrganisationUnitsByLevel: builder.query({
      query: (level) =>
        `/api/organisationUnits?level=${level}&paging=false&fields=id,name,code,displayName`,
      providesTags: ["OrganisationUnits"],
    }),

    // Zillas (level 3)
    getZillas: builder.query({
      query: () =>
        "/api/organisationUnits?level=3&paging=false&fields=id,name&filter=name:like:District",
      providesTags: ["Zillas"],
    }),

    // Organisation Units by user
    getOrganisationUnitsByUser: builder.query({
      query: () => "/api/organisationUnits?userOnly=true&paging=false",
      providesTags: ["OrganisationUnits"],
    }),

    // User data view units
    getUserDataViewUnits: builder.query({
      query: () =>
        "/api/organisationUnits?userDataViewOnly=true&level=3&fields=id,name,code,displayName&paging=false",
      providesTags: ["OrganisationUnits"],
    }),

    // Upazillas by parent
    getUpazillasByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:4&paging=false&fields=id,name&filter=name:like:Upazila`,
      providesTags: ["Upazillas"],
    }),

    // Unions by parent
    getUnionsByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Union`,
      providesTags: ["Unions"],
    }),

    // Pouroshovas by parent
    getPouroshovasByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Pouroshova`,
      providesTags: ["Pouroshovas"],
    }),

    // Sadars by parent
    getSadarByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Sadar`,
      providesTags: ["Sadar"],
    }),

    // Gov organizations by parent
    getGovByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:(Gov)`,
      providesTags: ["Gov"],
    }),

    // NGO organizations by parent
    getNgoByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:(NGO)`,
      providesTags: ["Ngo"],
    }),

    // Multi-sectoral organizations by parent
    getMultiSectoralByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:(Multi-sectoral)`,
      providesTags: ["MultiSectoral"],
    }),

    // Data value sets
    getDataValueSets: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams(params);
        return `/api/dataValueSets?${queryParams}`;
      },
      providesTags: ["DataValueSets"],
    }),

    // Post data value sets
    postDataValueSets: builder.mutation({
      query: (body) => ({
        url: "/api/dataValueSets",
        method: "POST",
        body,
      }),
      invalidatesTags: ["DataValueSets"],
    }),

    // Get current user info
    getCurrentUser: builder.query({
      query: () => "/api/me",
      providesTags: ["TestApi"],
    }),

    // Get SS data for import
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
      invalidatesTags: ["DataValueSets"],
    }),

    // Get organisation units for SS import
    getOrgUnitsForSS: builder.query({
      query: (datasetId) =>
        `/api/organisationUnits?userOnly=true&fields=id,name,code,dataSets,displayName&filter=dataSets.id:eq:${datasetId}&paging=false/`,
      providesTags: ["OrganisationUnits"],
    }),

    // Get MIS3 organisation units for SS import
    getOrgUnitsForMIS3: builder.query({
      query: () =>
        `/api/organisationUnits/?userOnly=true&fields=id,name,code,dataSets,displayName&filter=dataSets.id:eq:${import.meta.env.VITE_MIS3_DATASET_ID}`,
      providesTags: ["OrganisationUnits"],
    }),
  }),
});

export const {
  useGetOrganisationUnitsQuery,
  useGetOrganisationUnitsByLevelQuery,
  useGetZillasQuery,
  useGetOrganisationUnitsByUserQuery,
  useGetUserDataViewUnitsQuery,
  useGetUpazillasByParentQuery,
  useGetUnionsByParentQuery,
  useGetPouroshovasByParentQuery,
  useGetSadarByParentQuery,
  useGetGovByParentQuery,
  useGetNgoByParentQuery,
  useGetMultiSectoralByParentQuery,
  useGetDataValueSetsQuery,
  usePostDataValueSetsMutation,
  useGetCurrentUserQuery,
  useGetSSDataQuery,
  useSendToDhis2Mutation,
  useGetOrgUnitsForSSQuery,
  useGetOrgUnitsForMIS3Query,
} = baseApi;
