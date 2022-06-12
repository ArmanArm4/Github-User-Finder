import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const UserInfo = async userName => {
    const response = await fetch(`https://api.github.com/users/afc163`, {
      headers: {
        Authorization: `token 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`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserContext;
