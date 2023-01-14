import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import aos from "aos";

import Navbar from "./components/navbar/Navbar";
import Error404 from "./Errors/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Fotter from "./components/fotter/Fotter";
import Shop from "./pages/Shop";
import Adress from "./pages/Adress";
import Chackout from "./pages/Chackout";
import Payment from "./pages/Payment";

function App() {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* auth pages  */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* prduct pages */}
        <Route path="product/:id" element={<Product />} />
        <Route path="product/:id/address" element={<Adress />} />
        <Route path="product/:id/chackout" element={<Chackout />} />
        <Route path="product/:id/payment" element={<Payment />} />
        {/* pages  */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<>about</>} />
        {/* error pages */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Fotter />
    </>
  );
}

export default App;
