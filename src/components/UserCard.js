import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./componentsCss/userCard.module.css";

function UserCard({ user }) {
  return (
    <div className={classes.card}>
      <p className={classes.github}>Github</p>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${user.avatar_url})`,
        }}
      ></div>
      <p className={classes.user_name}>{user.login}</p>
      <Link to={`/user/${user.login}`} className={classes.user_info}>
        <button>Profile</button>
      </Link>
    </div>
  );
}

export default UserCard;
