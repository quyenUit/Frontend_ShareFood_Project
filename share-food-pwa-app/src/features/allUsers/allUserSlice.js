import { allUserFetch } from "./allUserFetch"
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    allUsers: null,
    status: 'idle',
    error: null
}


const allUserSlice = createSlice({
    name: 'allUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(allUserFetch.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(allUserFetch.fulfilled, (state, action) => {
          state.status = 'succeded'
          state.allUsers = action.payload
        })
        .addCase(allUserFetch.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
})

export default allUserSlice.reducer;
export const getUserById = (state, userId) => 
    state.allUser.allUsers.filter((item) => item._id === userId)