import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

const selectToken = (state) => state.auth.token;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const token = selectToken(getState());
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id) => `/profiles/${id}`, // Just return the URL string directly
    }),
    getUser:builder.query({
      query:(id)=>`/users/${id}`
    }),
  }),
  
});

export const { useGetProfileQuery,useGetUserQuery } = apiSlice;
