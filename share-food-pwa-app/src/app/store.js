import userReducer from "../features/users/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import orderReducer from "../features/orders/orderSlice"
import allUserReducer from "../features/allUsers/allUserSlice"
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
<<<<<<< HEAD
    user: userReducer,
    post: postReducer,
    order: orderReducer,
    allUser: allUserReducer,
})

=======
  user: userReducer,
  post: postReducer,
});
>>>>>>> a7afefc69480ad321ae625fcbc1a0dc68583dbcf

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
