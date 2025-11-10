import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "../Context/AuthContext.jsx";
import AdminContext from "../Context/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <AdminContext>
        <App />
      </AdminContext>
    </AuthContext>
  </StrictMode>
);
