import {configureStore} from "@reduxjs/toolkit"
import todoReducer, {todoSlice} from "./slice";
import {myApi} from "./api";
// import {posts} from "./api";

export const store = configureStore({
        reducer:{
                abc:todoReducer,
                // [myApi.reducerPath]:myApi.reducer
        },
        // middleware:(getDefaultMiddleware)=>{
        //         getDefaultMiddleware().concat(myApi.middleware)
        // }

})