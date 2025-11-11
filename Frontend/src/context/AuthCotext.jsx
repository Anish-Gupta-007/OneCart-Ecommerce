import React, { createContext } from "react";
export const AuthDatacontext = createContext();
const AuthCotext = ({ children }) => {
  const serverUrl = "https://onecart-ecommerce-backend.onrender.com";
  const value = {
    serverUrl,
  };
  return (
    <div>
      <AuthDatacontext.Provider value={value}>
        {children}
      </AuthDatacontext.Provider>
    </div>
  );
};

export default AuthCotext;
