'use client'

import { useEffect, useState } from "react"
import { Product } from "./Types/product"
import  {ProductCard}  from "./ProductCard"

export function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-center">Loading products...</div>
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="flex items-center justify-center my-10 space-x-2">
      {/* Page 1 - Active */}
      <button className="w-11 h-11 rounded-md flex items-center justify-center font-medium bg-[#B88E2F] text-white">
        1
      </button>

      {/* Page 2 - Inactive */}
      <button className="w-11 h-11 rounded-md flex items-center justify-center font-medium bg-[#F9F1E7] text-gray-600 ">
        2
      </button>

      {/* Page 3 - Inactive */}
      <button className="w-11 h-11 rounded-md flex items-center justify-center font-medium bg-[#F9F1E7] text-gray-600 ">
        3
      </button>

      {/* Next Button */}
      <button className="w-16 h-11 rounded-md flex items-center justify-center font-medium bg-[#F9F1E7] text-gray-600 ">
        Next
      </button>
    </div>
    </div>
  )
}

