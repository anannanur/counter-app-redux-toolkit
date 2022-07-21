import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data
})


const postsSlice = createSlice({
    name : 'posts',
    initialState: {
        posts : [],
        isLoading : false,
        error : null
    },
    extraReducers : (build) =>{
        build.addCase(fetchPosts.pending, (state) =>{
            state.isLoading = true;
            state.error = null;
            state.posts = []
        })
        build.addCase(fetchPosts.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.posts= action.payload;
            state.error = null
        })
        build.addCase(fetchPosts.rejected, (state,action) =>{
            state.isLoading = false;
            state.error = action.error.message;
            state.posts = []
        })
    }
})
export default postsSlice.reducer;