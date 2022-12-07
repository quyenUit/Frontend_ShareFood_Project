import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Datatable from "../datatable/Datatable";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      <Datatable />
    </div>
  );
};

export default MainDash;
