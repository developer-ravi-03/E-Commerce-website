import React from "react";
import Navbar from "../features/navbar/navbar";
import ProductList from "../features/product/components/ProductList";
import ProductDetail from "../features/product/components/ProductDetail";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
