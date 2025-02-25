import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li>
          <NavLink className={css.navigationLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.navigationLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
