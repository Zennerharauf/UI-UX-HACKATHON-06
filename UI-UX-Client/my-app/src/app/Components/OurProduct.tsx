"use client";

import { useEffect, useState } from "react";
import { Product } from "./Types/product";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

export function OurProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?category=furnitures&limit=8")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div>
      <div className="text-center text-2xl font-bold font-sans my-3">
        Related Products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link href="/Shop">
          <button className="text-[#B88E2F] border border-[#B88E2F] py-2 mb-10 px-10">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}
