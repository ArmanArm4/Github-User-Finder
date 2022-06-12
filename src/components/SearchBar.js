import { useState } from "react";
import classes from "./componentsCss/searchBar.module.css";

function SearchBar({ setUserName }) {
  const [usersSearch, setUsersSearch] = useState("");

  const inputTextHandler = e => {
    console.log(e.nativeEvent);
    setUsersSearch(e.target.value);
  };

  const SearchUserHandler = () => {
    setUserName(usersSearch);
    setUsersSearch("");
  };
  return (
    <div className={classes.search_bar}>
      <input
        onChange={inputTextHandler}
        value={usersSearch}
        placeholder="Search..."
        type="text"
      />
      <button onClick={SearchUserHandler}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
