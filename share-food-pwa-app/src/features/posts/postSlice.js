import { postList } from "./postList";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postUpload } from "./postUpload";
const initialState = {
  post: [],
  status: "idle",
  error: null,
};

export const getPost = (state, email) => {
    return state.post.post.filter((item) =>{
        if(item.email !== email){
            return item
        }
    })
}

export const getPostManage = (state, postId, email) => {
    return state.post.post.filter((item) => {
        if(item._id === postId && item.email === email){
            return item;
        }
    })
}


const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUpload.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postUpload.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(postUpload.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(postList.pending, (state) => {})
      .addCase(postList.fulfilled, (state, action) => {
        state.post = action.payload;
        state.showstatus = "succeeded";
      });
  },
});

export default postSlice.reducer
export const {resetStatus} = postSlice.actions
export const getPostStatus = (state) => state.post.status
export const getPostId = (state, postId) => 
    state.post.post.filter(post => post._id === postId)

export const getUserPostId = (state, email) => 
    state.post.post.filter(post => post.email === email)
