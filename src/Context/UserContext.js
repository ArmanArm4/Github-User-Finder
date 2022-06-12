import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfileLogin, setUserProfileLogin] = useState("afc163");

  const [userProfileInfo, setUserProfileInfo] = useState({});

  const UserInfo = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userProfileLogin}`,
      {
        headers: {
          Authorization: `token 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`,
        },
      }
    );
    const data = await response.json();
    setUserProfileInfo(data);
  };

  useEffect(() => {
    UserInfo();
  }, [userProfileLogin]);

  return (
    <UserContext.Provider value={{ setUserProfileLogin, userProfileInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
