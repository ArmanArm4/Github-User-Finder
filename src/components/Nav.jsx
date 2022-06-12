import React from "react";
import classes from "./componentsCss/nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className={classes.logo}>GitHub</div>
      <ul>
        <Link className={classes.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.link} to="/about">
          <li>About</li>
        </Link>
        <Link className={classes.link} to="/about/Arman">
          <li>Arman</li>
        </Link>

        <li></li>
      </ul>
    </nav>
  );
}

export default Nav;
