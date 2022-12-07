import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo-main.png";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

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
        style={expanded ? { left: "-60%" } : { left: "5%" }}
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
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setselected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="menuItem">
            <UilReact />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
