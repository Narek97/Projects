import "./MobileNavBar.css";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import React from "react";

const MobileNavBar = (props: any) => {
  return (
    <Menu {...props}>
      <NavLink to={"/"} className={"nav-wrapper--link"}>
        Home
      </NavLink>
      <NavLink to={"/quiz"} className={"nav-wrapper--link"}>
        Quiz
      </NavLink>
      <NavLink to={"/add-words"} className={"nav-wrapper--link"}>
        Add words
      </NavLink>
    </Menu>
  );
};

export default MobileNavBar;
