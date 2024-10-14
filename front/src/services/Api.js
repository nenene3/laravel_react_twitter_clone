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
  tagTypes: ["Post", "User", "Posts"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id) => `/profiles/${id}`,
      providesTags: (result) => {
        const arr = result.posts.map((e) => ({ type: "Post", id: e.id }));
        arr.push({ type: "Posts", id: "LIST" });
        return arr;
      },
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    createPost: builder.mutation({
      query: (text) => ({
        url: "/posts",
        method: "POST",
        body: JSON.stringify(text),
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Posts", id: "LIST" }],
    }),
    addBookMark: builder.mutation({
      query: (id) => ({
        url: "/bookmarks",
        method: "POST",
        body: JSON.stringify({ post_id: id }),
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetUserQuery,
  useCreatePostMutation,
  useAddBookMarkMutation,
} = apiSlice;
