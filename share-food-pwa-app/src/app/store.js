import userReducer from "../features/users/userSlice";
import { configureStore } from '@reduxjs/toolkit'
import postReducer from "../features/posts/postSlice";
import orderReducer from "../features/orders/orderSlice"
import allUserReducer from "../features/allUsers/allUserSlice"
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    user: userReducer,
    post: postReducer,
    order: orderReducer,
    allUser: allUserReducer,
})


const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
})


export default store