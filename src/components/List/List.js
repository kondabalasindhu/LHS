import React from "react";
import { NavLink } from "react-router-dom";

import "./List.css";

const List = () => {
  return (
    <>
      
          <nav>
            <div className="list">
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Home
              </NavLink>
              <NavLink
                to="/AboutUs"
                className="listItem"
                activeClassName="activeItem"
              >
                about
              </NavLink>
              <NavLink
                to="/services"
                className="listItem"
                activeClassName="activeItem"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="listItem"
                activeClassName="activeItem"
              >
                Contact
              </NavLink>
              <NavLink
                to="/Location"
                className="listItem"
                activeClassName="activeItem"
              >
           Location
              </NavLink>
            </div>
          </nav>
         
       
    </>
  );
};
export default List;
