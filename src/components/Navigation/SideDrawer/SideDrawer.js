import React from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../../../Assets/external-link-symbol.svg";
import Sign_In from "../../../Assets/sign-in.svg";
import Avatar from "../../../Assets/avatar.svg";

import "./SideDrawer.css";

const activeStyle = {
  fontWeight: "bolder",
  color: "black",
  borderBottom: "4px solid brown",
  transition: "all ease 0.5s",
  background: "white"
};

const SideDrawer = (props) => {   
  let drawerClasses = props.show ? "side-drawer open" : "side-drawer";
  return (
    <nav className={drawerClasses} onClick={props.onClick}>
      <ul>
        <div className="d-flex ">
          <img
            className="sidebarimg mt-4"
            src={Avatar}
            width={20}
            height={20}
            alt="user"
          />

          <li>
            <NavLink to="/Users" activeStyle={activeStyle}>
              Users
            </NavLink>
          </li>
        </div>

        <div className="d-flex ">
          <img
            className="sidebarimg mt-4"
            src={Register}
            width={20}
            height={20}
            alt="user"
          />

          <li>
            <NavLink to="/Sign_Up" activeStyle={activeStyle}>
              Sign Up
            </NavLink>
          </li>
        </div>

        <div className="d-flex ">
          <img
            className="sidebarimg mt-4"
            src={Sign_In}
            width={20}
            height={20}
            alt="user"
          />

          <li>
            <NavLink to="/Sign_In" activeStyle={activeStyle}>
              Sign In
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default SideDrawer;
