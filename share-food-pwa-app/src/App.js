import React from "react";
import "./styles/App.css";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import FoodDetails from "./components/Products/FoodDetails";
import NavbarPage from "./components/Header/navbarPage";
import MyFoodPage from "./pages/MyFood";
import MyGetFoodPage from "./pages/MyGetFood";
import FollowingPage from "./pages/Following";
import FollowerPage from "./pages/Follower";
import PostFood from "./components/Body/PostFood";
import { useDispatch } from "react-redux";
import { postList } from "./features/posts/postList";
import store from "./app/store";
import Search from "./pages/Search";
import AdminPage from "./pages/AdminPage";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function App() {
  const dispatch = useDispatch();
  dispatch(postList());
  const persistor = persistStore(store);
  return (
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="admin" element={<AdminPage />} />
          <Route path="/" element={<NavbarPage />}>
            <Route index element={<HomePage />} />
            <Route path="myfood" element={<MyFoodPage />} />
            <Route path="mygetfood" element={<MyGetFoodPage />} />
            <Route path="following" element={<FollowingPage />} />
            <Route path="follower" element={<FollowerPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<Register />} />
            <Route path="search" element={<Search />} />

            <Route path="post">
              <Route index element={<PostFood />} />
              <Route path=":postId" element={<FoodDetails />} />
            </Route>
          </Route>
        </Routes>
      </PersistGate>  
  );
}

export default App;
