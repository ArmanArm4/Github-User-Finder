import React from "react";
import { useContext } from "react";
import SearchContext from "../Context/SearchContext";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard.js";

function Home() {
  const { userInfo, setUserName } = useContext(SearchContext);

  return (
    <div>
      <SearchBar setUserName={setUserName} />
      <div className="cards">
        {userInfo.map(user => {
          return <UserCard user={user} key={user.login}></UserCard>;
        })}
      </div>
    </div>
  );
}

export default Home;
