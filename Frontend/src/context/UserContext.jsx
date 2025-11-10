import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { use } from "react";
import { createContext } from "react";
import { AuthDatacontext } from "./AuthCotext";
import axios from "axios";
import { useEffect } from "react";
export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState("");
  const { serverUrl } = useContext(AuthDatacontext);
  const getCurrentUser = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log(result.data);
    } catch (err) {
      setUserData(null);
      console.log("error on userContext", err);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  let value = { userData, setUserData, getCurrentUser };
  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
