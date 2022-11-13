import { createSlice } from "@reduxjs/toolkit";
import {postUpload} from "./postUpload";

const initialState = {
    loading: false,
    postInfo: null,
    error: null,
    success: false
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers:{
        [postUpload.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [postUpload.fulfilled]: (state , { payload }) => {
            state.loading = false
            state.postInfo = payload
        },
        [postUpload.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})

export default postSlice.reducer