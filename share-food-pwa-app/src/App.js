import React from "react";
import "./styles/App.css";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import FoodDetails from "./components/Products/FoodDetails";
import NavbarPage from "./components/Header/navbarPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarPage />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="food_detail" element={<FoodDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
