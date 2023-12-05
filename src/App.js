// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Main_Components/Home";
import Navigation_Bar from "./Navigation_Bar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation_Bar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
