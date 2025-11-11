import React, { createContext } from "react";
export const authDataConetxt = createContext();
const AuthContext = ({ children }) => {
  const serverUrl = "https://onecart-ecommerce-backend.onrender.com";
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
