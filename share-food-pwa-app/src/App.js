import React from "react";
import "./styles/App.css";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import FoodDetails from "./components/Products/FoodDetails";
import NavbarPage from "./components/Header/navbarPage";
import SearchFood from "./components/Body/Utils/SearchFood";
import MyFoodPage from "./pages/MyFood";
import MyGetFoodPage from "./pages/MyGetFood";
import FollowingPage from "./pages/Following";
import FollowerPage from "./pages/Follower";
import { Provider } from "react-redux";
import PostFood from "./components/Body/PostFood";
import store from "./app/store";


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<NavbarPage />}>
          <Route index element={<HomePage />} />
          <Route path="myfood" element={<MyFoodPage />} />
          <Route path="mygetfood" element={<MyGetFoodPage />} />
          <Route path="following" element={<FollowingPage />} />
          <Route path="follower" element={<FollowerPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="food_detail" element={<FoodDetails />} />
          <Route path="search" element={<SearchFood />} />
          <Route path="post" element={<PostFood />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
