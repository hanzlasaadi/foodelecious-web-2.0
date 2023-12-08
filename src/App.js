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
import axios from "axios";
import { apiUrl } from "./data/env";
import React from "react";
import { data } from "./data/data";
import { data as data2 } from "./data/data2";

function App() {
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
  }, []);

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
            element={<ProductCategory subCategories={subCategories} />}
          />
          <Route path="/cartview" element={<CartView />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
