import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_DHIS2_BASE_URL || "http://localhost:8080/dhis",
    credentials: "include",
    prepareHeaders: (headers) => {
      const username = "sub_admin"; 
      const password = "Subadmin@123"; 

      const encoded = btoa(`${username}:${password}`);
      headers.set("Authorization", `Basic ${encoded}`);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: [
    "Auth",
    "OrganisationUnit",
    "UserDataView",
    "Zilla",
    "Upazila",
    "Union",
    "Pouroshova",
    "Sadar",
    "GovOrg",
    "Ngo",
    "MultiSectoral",
    "DataSet",
    "DataValue",
    "MisForm",
    "ImportSS",
    "Report",
    "TestApi",
  ],
  endpoints: () => ({}),
});

export default baseApi;
