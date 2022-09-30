import React from "react";
import { useState } from "react";

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login(token) {},
  logout() {},
});

const calculateRenainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);

  const userIsLoggedIn = !!token;

  const login = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);

    const remainingTime = calculateRenainingTime(expirationTime); // 1 hour

    setTimeout(logout, remainingTime);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login,
    logout,
  };

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
