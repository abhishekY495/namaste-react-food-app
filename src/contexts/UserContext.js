import { createContext, useState } from "react";

const data = {
  name: "",
};

export const UserData = createContext();
export const UserDataProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(data);
  return (
    <UserData.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserData.Provider>
  );
};
