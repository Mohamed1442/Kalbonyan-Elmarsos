import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
});

export default AuthContext;
