import React from "react";
import "./styles/App.css";
import NavbarPage from "./components/Header/navbarPage";
import Routers from "./Routes/Routers";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <NavbarPage />
      <div>
        <Routers />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
