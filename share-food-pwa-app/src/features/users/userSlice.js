import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { userLogin } from "./userAction";

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
      [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      }
    }
  })

export default userSlice.reducer