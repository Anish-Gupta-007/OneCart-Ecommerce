import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthCotext from "./context/AuthCotext.jsx";
import UserContext from "./context/UserContext.jsx";
import ShopContext from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthCotext>
        <UserContext>
          <ShopContext>
            <App />
          </ShopContext>
        </UserContext>
      </AuthCotext>
    </BrowserRouter>
  </StrictMode>
);
