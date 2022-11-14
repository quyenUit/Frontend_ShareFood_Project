import { createSlice } from "@reduxjs/toolkit";
import {postUpload} from "./postUpload";

const initialState = {
    status: 'idle',
    error: null
}

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
    }
})

export default postSlice.reducer
export const {resetStatus} = postSlice.actions
export const getPostStatus = (state) => state.post.status