import userReducer from "../features/users/userSlice";
import { configureStore } from '@reduxjs/toolkit'
import postReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer
    }
})

export default store