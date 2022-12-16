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
import { useSelector, useDispatch } from "react-redux";
import { postList } from "./features/posts/postList";
import store from "./app/store";
import Search from "./pages/Search";
import ProfileUserPage from "./pages/ProfileUserPage";
import ProfileUserDetail from "./components/Body/ProfileUserDetail";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Profile from "./pages/Profile";
import { allUserFetch } from "./features/allUsers/allUserFetch";
// import { fetchOrders } from "./features/orders/orderAction";
// import AdminPage from "./pages/AdminPage";
import UserList from "./Admin/components/admin-users/Users";
import FoodList from "./Admin/components/admin-post/PostFoods";
import AddEdit from "./Admin/components/admin-users/AddEdit";
import EditPostFood from "./Admin/components/admin-post/EditPostFood";
import Menu from "./Admin/components/Menu";
import Orders from "./Admin/components/admin-order/Orders";
import Charts from "./Admin/components/Charts";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(postList());
  dispatch(allUserFetch());

  const persistor = persistStore(store);
  return (
    <PersistGate persistor={persistor}>
      <Routes>
        <Route path="/" element={<NavbarPage />}>
          <Route index element={<HomePage />} />
          <Route path="myfood" element={<MyFoodPage />} />
          <Route path="mygetfood" element={<MyGetFoodPage />} />
          <Route path="following" element={<FollowingPage />} />
          <Route path="follower" element={<FollowerPage />} />
          <Route path="search" element={<Search />} />
          <Route path="uploadpost" element={<PostFood />} />
          <Route path="profile" element={<ProfileUserPage />} />
          <Route path="/profile/edit" element={<ProfileUserDetail />} />
          <Route path="/prof/:username" element={<Profile />} />
          <Route path="post">
            <Route index element={<MyFoodPage />} />
            <Route path=":postId" element={<FoodDetails />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Menu />}>
          <Route index element={<Charts />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/update/:id" element={<AddEdit />} />
          <Route path="posts" element={<FoodList />} />
          <Route path="posts/update/:id" element={<EditPostFood />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </PersistGate>
  );
}

export default App;
