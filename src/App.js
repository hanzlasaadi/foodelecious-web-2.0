// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Main_Components/Home";
import Navigation_Bar from "./Navigation_Bar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutPage from "./Main_Components/CheckoutPage";
import ProductCategory from "./Sub_Components/Page2/ProductCategory";
import CartView from "./Sub_Components/Page4/CartView";
import SelectOptionPage from "./Sub_Components/Page3/SelectOptionPage";
import Login from "./Login";
import SignUp from "./SignUp";

import axios from "axios";
import { apiUrl } from "./data/env";
import React from "react";
import { data } from "./data/data";
import { data as data2 } from "./data/data2";

function App() {
  const [cart, setCart] = React.useState([]);
  const [categories, setCategories] = React.useState(data);
  const [subCategories, setSubCategories] = React.useState(data2);

  React.useEffect(() => {
    axios
      .get(
        `${apiUrl}/api/v1/productCategory?limit=100&sort=priority&access=website`
      )
      .then((res) => {
        console.log(res.data);
        setCategories(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/api/v1/product?limit=100`)
      .then((res) => {
        console.log(res.data, "subcategories");
        setSubCategories(res.data.data);
      })
      .catch((err) => console.log(err));
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleAddToCart = (newItem) => {
    if (cart.some((c) => c._id === newItem._id)) {
      alert("Already in the cart!");
    } else {
      console.log("not in the cart", newItem.name);
      setCart((c) => {
        localStorage.setItem("cart", JSON.stringify([...c, newItem]));
        return [...c, newItem];
      });
    }
  };

  const handleRemoveFromCart = (removedId) => {
    const updatedCart = cart.filter((item) => item._id !== removedId);
    setCart(() => {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navigation_Bar />
        {/* <SelectOptionPage /> */}
        {/* <CheckoutPage /> */}
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route
            path="/productCategories/:id"
            element={
              <ProductCategory
                cart={cart}
                subCategories={subCategories}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route path="/cartview" element={<CartView />} />
          <Route path="/selectOption" element={<SelectOptionPage />} />
          <Route path="/cartview" element={<CartView />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
