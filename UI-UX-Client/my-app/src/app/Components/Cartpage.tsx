'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  thumbnail: string
  size: string
  color: string
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    setItems(cartItems)
  }, [])

  const onRemoveItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal // Add shipping/tax calculations here if needed

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-[#FFF9F3] rounded-lg p-4 mb-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Subtotal</div>
            </div>
          </div>

          {items.map((item) => (
            <div key={item.id} className="border-b py-4">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 bg-[#F9F1E7] rounded-lg overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        Size: {item.size} | Color: {item.color}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-center">
                  Rs. {item.price.toFixed(2)}
                </div>
                <div className="col-span-2 text-center">
                  {item.quantity}
                </div>
                <div className="col-span-2 text-center flex items-center justify-between">
                  <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="lg:w-1/3">
          <div className="bg-[#FFF9F3] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pb-4 border-b font-medium">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. {total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-[#B88E2F] hover:bg-[#9e7a28] text-white">
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

