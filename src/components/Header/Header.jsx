import React from "react";
// import { NavLink } from "react-router-dom";

const Header = ({ showModal }) => {
  return (
    <nav className="">
      <div className="">
        <span className="">Navbar</span>
        <div className=" " id="">
          <div className="">
            {/* <NavLink className="nav-link text-white " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/news">
              News
            </NavLink>
            <NavLink className="nav-link text-white" to="/todo">
              ToDo
            </NavLink> */}

          </div>
        </div>
        <button className="" onClick={showModal}>
          Open Modal
        </button>
      </div>
    </nav>
  );
};

export default Header;
