import React, { createContext } from "react";
export const authDataConetxt = createContext();
const AuthContext = ({ children }) => {
  const serverUrl = "http://localhost:4000";
  const value = {
    serverUrl,
  };
  return (
    <div>
      <authDataConetxt.Provider value={value}>
        {children}
      </authDataConetxt.Provider>
    </div>
  );
};

export default AuthContext;
