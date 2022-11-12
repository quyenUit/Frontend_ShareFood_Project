import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { userLogin } from "./userAction";

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    success: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout: (state) => {
        state.loading = false
        state.userInfo = null
        state.error = null
      }
    },
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

export const { logout } = userSlice.actions
export default userSlice.reducer