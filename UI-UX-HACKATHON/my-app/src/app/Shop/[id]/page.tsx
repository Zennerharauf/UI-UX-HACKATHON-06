import { notFound } from "next/navigation"
import { ProductDetail } from "../../Components/ProductDetail"
import DynamicProdDesSec from "@/app/Components/DynamicProductDecSec"
import { RelatedProducts } from "@/app/Components/RelatedProducts"

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) return undefined
  return res.json()
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
      <DynamicProdDesSec/>
      <RelatedProducts/>
    </div>
  )
}

