import { notFound } from "next/navigation"
import { ProductDetail } from "@/app/Components/ProductDetail"
import DynamicProdDesSec from "@/app/Components/DynamicProductDecSec"
import { RelatedProducts } from "@/app/Components/RelatedProducts"

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) return undefined
  return res.json()
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id)
  
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

