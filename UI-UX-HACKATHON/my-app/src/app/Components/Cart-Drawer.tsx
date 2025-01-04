'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import Link from 'next/link'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  thumbnail: string
  size: string
  color: string
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemoveItem: (id: string) => void
}

export function CartDrawer({ isOpen, onClose, items, onRemoveItem }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="p-6 pb-0">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        
        {/* Scrollable Items Area */}
        <div className="flex-1 overflow-auto p-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-6 border-b pb-4">
              <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Size: {item.size}, Color: {item.color}
                </p>
                <div className="flex items-center mt-1">
                  <span>{item.quantity} x</span>
                  <span className="ml-1">Rs. {item.price.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Fixed Bottom Section */}
        <div className="border-t bg-white p-6">
          <div className="flex justify-between mb-6">
            <span className="text-xl">Subtotal</span>
            <span className="text-xl text-[#B88E2F]">Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Link href="/Cart">
            <Button variant="outline" className="w-full rounded-full" size="lg">
              Cart
            </Button>
            </Link>
            <Link href="/Checkout">
            <Button variant="outline" className="w-full rounded-full" size="lg">
              Checkout
            </Button>
            </Link>
            <Link href="/ProductComparision">
            <Button variant="outline" className="w-full rounded-full" size="lg">
              Comparison
            </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

