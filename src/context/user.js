import React, { createContext, useContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState("");

  return (
    <Auth.Provider value={{ userInfo, setUserInfo }}>{children}</Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
