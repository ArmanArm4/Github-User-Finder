import { useEffect, useState } from "react";
import classes from "./componentsCss/userCard.module.css";

function UserCard({ user }) {
  const [followers, setFollowers] = useState("");
  const UserFollowers = async repoURL => {
    const response = await fetch(repoURL, {
      headers: {
        Authorization: `token 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`,
      },
    });
    const data = await response.json();

    setFollowers(data.length);
  };

  useEffect(() => {
    UserFollowers(user.followers_url);
  }, []);

  const [repos, setRepos] = useState("0");
  const UserRepos = async repoURL => {
    const response = await fetch(repoURL, {
      headers: {
        Authorization: `token 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`,
      },
    });
    const data = await response.json();

    setRepos(data.length);
  };

  useEffect(() => {
    UserRepos(user.repos_url);
  }, []);

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
      <div className={classes.user_info}>
        <div className={classes.followers}>
          <i className="fas fa-user-friends"></i>
          <h5>{followers}</h5>
        </div>
        <div className={classes.repo}>
          <i className="fas fa-file-code"></i>
          <h5>{repos}</h5>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
