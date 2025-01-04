"use client";

import { Heart, Share2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "./Types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
   <Link href={`/Shop/${product.id}`}>
      <Card
      className="group  relative overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 z-20 bg-black/60 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button className="w-3/4 mt-2 bg-white rounded-none text-[#B88E2F] font-bold hover:bg-zinc-200 ">
          Add to cart
        </Button>
        <div className="flex gap-3">
          <div className="flex justify-center items-center text-white gap-1">
            <Share2 className="h-4 w-4" />
            <p>Share</p>
          </div>
          <div className="flex justify-center items-center text-white gap-1">
            <Scale className="h-4 w-4" />
            <p>Compare</p>
          </div>
          <div className="flex justify-center items-center text-white gap-1">
            <Heart className="h-4 w-4" />
            <p>Like</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative aspect-square">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product.discountPercentage > 0 && (
          <span className="absolute w-10 h-10 flex justify-center items-center top-2 right-2 bg-[#E97171] text-white px-2 py-1 rounded-full text-sm">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="bg-zinc-100">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{product.title}</h3>
          <p className="text-sm mt-3 text-[#898989]">
            {product.description.substring(0, 60)}...
          </p>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex gap-2 items-baseline">
            <span className="text-lg font-bold">
              Rp {discountedPrice.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-base ml-3 text-[#B0B0B0] line-through">
                Rp {product.price}
              </span>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
   </Link>
  );
}
