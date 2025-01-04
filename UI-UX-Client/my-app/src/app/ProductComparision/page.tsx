"use client";


import ProductComparison from "../Components/ProductComparision";
import ComponentLocation from "../Components/ComponentLocation";
import Features from "../Components/Featured";

export default function Comparison() {
  return (
    <div>
      <ComponentLocation
        title="Product Comparision"
        location="ProductLocation"
      />
      <ProductComparison />
      {/* Features Section */}
      <div className="space-y-12 px-4 py-8 sm:space-y-8 sm:py-6"></div>
      <Features/>
    </div>
  );
}
