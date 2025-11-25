import { baseApi } from './baseApi';

// Authentication endpoints
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/d2auth",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/api/d2auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    refresh: builder.query({
      query: () => "/api/d2auth/refresh",
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
} = authApi;