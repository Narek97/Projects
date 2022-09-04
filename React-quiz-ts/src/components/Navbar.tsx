import React from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={"/"} className="nav-wrapper--logo nav-wrapper--link">
          Logo
        </Link>
        <ul id="nav-mobile" className="nav-wrapper--ul">
          <NavLink to={"/"} className={'nav-wrapper--link'}>Home</NavLink>
          <NavLink to={"/quiz"} className={'nav-wrapper--link'}>Quiz</NavLink>
          <NavLink to={"/add-words"} className={'nav-wrapper--link'}>Add words</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
