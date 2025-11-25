import { baseApi } from "./baseApi";

// Organisation Units API
export const orgUnitApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Organisation Units endpoints
    getOrganisationUnits: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams(params);
        return `/api/organisationUnits?${queryParams}`;
      },
      providesTags: ["OrganisationUnit"],
    }),

    getZillaByUser: builder.query({
      query: () => "/api/29/organisationUnits?userOnly=true&paging=false",
      providesTags: ["Zilla"],
    }),
    getUpazilaByUser: builder.query({
      query: () =>
        "/api/29/organisationUnits?userDataViewOnly=true&paging=false",
      providesTags: ["Upazila"],
    }),

    // Zillas (level 3)
    getZillas: builder.query({
      query: () =>
        "/api/organisationUnits?level=3&paging=false&fields=id,name&filter=name:like:District",
      providesTags: ["Zilla"],
    }),

    // Organisation Units by user
    getOrganisationUnitsByUser: builder.query({
      query: () => "/api/organisationUnits?userOnly=true&paging=false",
      providesTags: ["OrganisationUnit"],
    }),

    // User data view units
    getUserDataViewUnits: builder.query({
      query: () =>
        "/api/organisationUnits?userDataViewOnly=true&level=3&fields=id,name,code,displayName&paging=false",
      providesTags: ["UserDataView"],
    }),

    // Upazillas by parent
    getUpazillasByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:4&paging=false&fields=id,name&filter=name:like:Upazila`,
      providesTags: ["Upazila"],
    }),

    // Unions by parent
    getUnionsByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Union`,
      providesTags: ["Union"],
    }),

    // Pouroshovas by parent
    getPouroshovasByParent: builder.query({
      query: (parentId) =>
        `/api/organisationUnits?filter=parent.id:eq:${parentId}&filter=level:eq:5&paging=false&fields=id,name&filter=name:like:Pouroshova`,
      providesTags: ["Pouroshova"],
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
      providesTags: ["GovOrg"],
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
  }),
});

export const {
  useGetOrganisationUnitsQuery,
  useGetZillaByUserQuery,
  useGetUpazilaByUserQuery,
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
} = orgUnitApi;
