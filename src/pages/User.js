import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./pages.css/user.module.css";
import NotFound from "./NotFound";

function User() {
  const navigate = useNavigate();

  let { link } = useParams();

  const [userInfoState, setuserInfoState] = useState({});

  const [isLoading, setisLoading] = useState(true);
  const [wrongUserName, setwrongUserName] = useState(false);

  const UserInfo = async () => {
    const response = await fetch(`https://api.github.com/users/${link}`);
    if (!response.ok) {
      navigate("/notfound");
    } else {
      const data = await response.json();
      setuserInfoState(data);

      setisLoading(false);
    }
  };

  useEffect(() => {
    UserInfo(link);
  }, [link]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className={classes.parent_element}>
      <h1>{userInfoState.login}</h1>
      <h3>{userInfoState.bio}</h3>
      <h3>public repos {userInfoState.public_repos}</h3>
      <h3>Followers {userInfoState.followers}</h3>
      <h3>Following {userInfoState.following}</h3>
      <h3>
        {userInfoState.hireable &&
          `${userInfoState.login} is looking for a job`}
      </h3>
      <h3>Located in {userInfoState.location}</h3>
    </div>
  );
}

export default User;
