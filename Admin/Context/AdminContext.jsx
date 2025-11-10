import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataConetxt } from "./AuthContext";
import axios from "axios";

export const adminDataContext = createContext();
const AdminContext = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const { serverUrl } = useContext(authDataConetxt);

  const getAdmin = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/user/getadmin", {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log(result.data);
    } catch (err) {
      setAdminData(null);
      console.log(err);
    }
  };
  useEffect(() => {
    getAdmin();
  }, []);
  let value = { adminData, setAdminData, getAdmin };
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
};

export default AdminContext;
