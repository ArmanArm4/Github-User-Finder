import { createContext, useReducer, useState, useEffect } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [userName, setUserName] = useState("Github");
  const [userInfo, setUserInfo] = useState([]);

  const searchUsers = async userName => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${userName}`
    );
    const data = await response.json();

    setUserInfo(data.items);
  };
  useEffect(() => {
    searchUsers(userName);
  }, [userName]);
  return (
    <SearchContext.Provider value={{ userName, setUserName, userInfo }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
