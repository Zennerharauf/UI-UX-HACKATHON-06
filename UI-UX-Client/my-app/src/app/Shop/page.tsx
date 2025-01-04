import React from "react";
import ComponentLocation from "../Components/ComponentLocation";
import ShopListHeader from "../Components/ShopListHeader";
import Features from "../Components/Featured";
import { ProductsGrid } from "../Components/ProductGrid";

const page = () => {
  return (
    <div>
      <ComponentLocation title="Shop" location="Shop" />
      <ShopListHeader />
      <main className="container mx-auto md:px-16 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <ProductsGrid />
      </main>
      <Features />
    </div>
  );
};

export default page;
