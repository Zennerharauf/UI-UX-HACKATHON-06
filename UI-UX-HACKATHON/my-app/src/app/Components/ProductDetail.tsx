"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Facebook, Linkedin, Twitter, Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Product } from "../Components/Types/product";
import { CartDrawer } from "./Cart-Drawer";


interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {

  


  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    size: string;
    color: string;
  }>>([]);

  const images = product.images
    ? [product.thumbnail, ...product.images]
    : [product.thumbnail];
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  const handleAddToCart = () => {
    // Create a unique ID for this product variant
    const cartItem = {
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      title: product.title,
      price: discountedPrice,
      quantity: quantity,
      thumbnail: product.thumbnail,
      size: selectedSize,
      color: selectedColor
    }
    
    // Store in localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItemIndex = existingCart.findIndex((item: {id: string}) => item.id === cartItem.id);

    
    if (existingItemIndex >= -1) {
      existingCart[existingItemIndex].quantity += cartItem.quantity
    } else {
      existingCart.push(cartItem)
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart))
    
    
    // Navigate to cart page
    const variantId = `${product.id}-${selectedSize}-${selectedColor}`;
    
    setCartItems(prev => {
      // Check if this exact variant exists
      const existingItemIndex = prev.findIndex(item => item.id === variantId);
      
      if (existingItemIndex >= 0) {
        // Update existing item
        const newItems = [...prev];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
        return newItems;
      } else {
        // Add new item
        return [...prev, {
          id: variantId,
          title: product.title,
          price: discountedPrice,
          quantity: quantity,
          thumbnail: product.thumbnail,
          size: selectedSize,
          color: selectedColor
        }];
      }
    });
    
    setIsCartOpen(true);
    setQuantity(1); // Reset quantity after adding to cart
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Product Images */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-3/5">
            <div className="flex gap-6">
              <div className="flex flex-col gap-4 w-20">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-full border rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-[#B88E2F]" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="relative flex-1 aspect-square bg-[#F9F1E7] rounded-2xl overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-2/5">
            <h1 className="text-[42px] font-medium mb-4">{product.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      star <= 4 ? "text-[#FFC700] " : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">5 Customer Review</span>
            </div>
            <p className="text-[24px] font-medium mb-6">
              Rs. {discountedPrice.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Options */}
            <div className="space-y-6">
              {/* Size */}
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex gap-4">
                  {["L", "XL", "XS"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border flex items-center justify-center ${
                        selectedSize === size
                          ? "bg-[#B88E2F] text-white border-[#B88E2F]"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex gap-4">
                  {[
                    { name: "purple", class: "bg-[#816DFA]" },
                    { name: "black", class: "bg-black" },
                    { name: "gold", class: "bg-[#B88E2F]" },
                  ].map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full ${color.class} ${
                        selectedColor === color.name
                          ? "ring-2 ring-offset-2 ring-[#B88E2F]"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </Button>
                <Link href='/ProductCompar'>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-200"
                >
                  + Compare
                </Button></Link>
              </div>
            </div>

            {/* Meta Information */}
            <div className="border-t border-gray-200 mt-8 pt-8">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="text-gray-500 py-2">SKU</td>
                    <td className="py-2">: SS001</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 py-2">Category</td>
                    <td className="py-2">: Sofas</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 py-2">Tags</td>
                    <td className="py-2">: Sofa, Chair, Home, Shop</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 py-2">Share</td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        :
                        <button className="text-gray-600 hover:text-gray-900">
                          <Facebook className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Twitter className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}

