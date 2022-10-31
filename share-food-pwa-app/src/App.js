import React from 'react';
import './styles/App.css';
import HomePage from './pages/Home';
import {Routes, Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
