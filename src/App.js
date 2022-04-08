import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductPage from "./pages/Product";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path=":category" index element={<Category />} />
        <Route exact path="product/:productId" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Navigate to="/all" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
