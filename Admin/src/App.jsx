import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Orders from "./Pages/Orders";
import List from "./Pages/List";
import Login from "./Pages/Login";
import { useContext } from "react";
import { adminDataContext } from "../Context/AdminContext";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const { adminData } = useContext(adminDataContext);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        {!adminData ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
