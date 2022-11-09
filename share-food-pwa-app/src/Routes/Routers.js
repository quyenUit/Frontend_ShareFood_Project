import HomePage from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import FoodDetails from "../components/Products/FoodDetails";
import TinFood from "../components/Body/TinFood";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/food_detail" element={<FoodDetails />} />
      <Route path="/tin_food" element={<TinFood />} />
    </Routes>
  );
}

export default Routers;
