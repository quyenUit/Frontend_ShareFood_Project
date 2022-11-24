import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {postUpload} from "./postUpload";
import { postList } from "./postList";
import axios from "axios";
import { ApiURL } from "../../components/constants/apiURL";
const initialState = {
    post: [],
    status: 'idle',
    error: null
}

export const updateOrderPost = createAsyncThunk('posts/order', async(initialPost) => {
    const {id} = initialPost;

    try{
        const response = await axios.put(`http://localhost:3001/post/update/:${id}`, initialPost)
        return response.data;
    }catch(err){
        return initialPost;
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetStatus(state){
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postUpload.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postUpload.fulfilled, (state, action) => {
            state.status = 'succeeded'
        })
        .addCase(postUpload.rejected, (state, action) => {
            state.status = 'failed'
        })
        .addCase(postList.pending, (state) => {

        })
        .addCase(postList.fulfilled, (state, action) => {
            state.post = action.payload
            state.showstatus = 'succeeded'
        })
    }
})

export default postSlice.reducer
export const {resetStatus} = postSlice.actions
export const getPostStatus = (state) => state.post.status
export const getPostId = (state, postId) => 
    state.post.post.find(post => post.id === postId)

export const getUserPostId = (state, userId) =>
    state.post.post.filter(post => post.email === userId)