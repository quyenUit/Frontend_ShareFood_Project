import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";

//import { UilEstate } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useEffect } from "react";
//import { UilSignOutAtl } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setselected] = useState(0);

  const [expanded, setexpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      false: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setexpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            ShareF<span>o</span>od
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, path) => {
            return (
              <div
                className={selected === path ? "menuItem active" : "menuItem"}
                key={path}
                onClick={() => setselected(path)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="menuItem">{/* <UilSignOutAtl /> */}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
