import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query";

export const myApi = createApi({
    reducerPath:"myApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    endpoints:(builder)=> ({
        getPosts: builder.query({
            query: () => "posts/"
        }),
        newPost: builder.mutation({
            query:(post)=>({
                url:"posts",
                method:"POST",
                body:post,
            }),
        })
    }),

})

export const {useGetPostsQuery} = myApi;