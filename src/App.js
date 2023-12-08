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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation_Bar />
        {/* <SelectOptionPage /> */}
        {/* <CheckoutPage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productCategories" element={<ProductCategory />} />
          <Route path="/cartview" element={<CartView />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
