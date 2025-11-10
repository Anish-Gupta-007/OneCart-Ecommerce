import "./App.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import { useContext, useState } from "react";
import { UserDataContext } from "./context/UserContext";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import Contect from "./Pages/Contect";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./Pages/PageNotFound";
import Ai from "./Components/Ai";

function App() {
  const { userData } = useContext(UserDataContext);
  const locations = useLocation();
  // const Navigate = useNavigate();

  return (
    <>
      <ToastContainer />

      {userData && <Nav />}
      <Routes>
        <Route
          path="/"
          element={
            userData ? (
              <Home />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />

        <Route
          path="/registraion"
          element={
            userData ? (
              <Navigate to={locations.state?.from || "/"} />
            ) : (
              <Registration />
            )
          }
        />
        <Route
          path="/login"
          element={
            userData ? (
              <Navigate to={locations.state?.from || "/"} />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/about"
          element={
            userData ? (
              <About />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/collections"
          element={
            userData ? (
              <Collection />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/product"
          element={
            userData ? (
              <Product />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/contact"
          element={
            userData ? (
              <Contect />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/productDetails/:productId"
          element={
            userData ? (
              <ProductDetail />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/cart"
          element={
            userData ? (
              <Cart />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/placeorder"
          element={
            userData ? (
              <PlaceOrder />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/order"
          element={
            userData ? (
              <Order />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Ai />
    </>
  );
}

export default App;
