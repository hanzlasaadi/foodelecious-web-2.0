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
import Contact from "./Sub_Components/ContactUs/Contact";
import MainBlog from "./Sub_Components/Blog/MainBlog";
import Post1 from "./Sub_Components/Blog/Post1";
import Post2 from "./Sub_Components/Blog/Post2";
import Post3 from "./Sub_Components/Blog/Post.3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation_Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productCategories" element={<ProductCategory />} />
          <Route path="/selectOption" element={<SelectOptionPage />} />
          <Route path="/cartview" element={<CartView />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/blogmain" element={<MainBlog />} />
          <Route path="/blogmain/post1" element={<Post1 />} />
          <Route path="/blogmain/post2" element={<Post2 />} />
          <Route path="/blogmain/post3" element={<Post3 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
