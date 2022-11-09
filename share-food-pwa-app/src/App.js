import React from "react";
import "./styles/App.css";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import FoodDetails from "./components/Products/FoodDetails";
import NavbarPage from "./components/Header/navbarPage";
import { Footer } from "./components/Footer/Footer";
import SearchFood from "./components/Body/Utils/SearchFood";
import Footers from "./components/Footer/Footers";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarPage />}>
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="food_detail" element={<FoodDetails />} />
        <Route path="footer" element={<Footer />} />
        <Route path="footers" element={<Footers />} />
        <Route path="search" element={<SearchFood />} />
      </Route>
    </Routes>
  );
}

export default App;
