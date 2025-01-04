"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ComparisonSection {
  title: string
  specs: {
    label: string
    value1: string
    value2: string
  }[]
}

const comparisonData: ComparisonSection[] = [
  {
    title: "General",
    specs: [
      { label: "Sales Package", value1: "1 sectional sofa", value2: "1 Three Seater, 2 Single Seater" },
      { label: "Model Number", value1: "TFCBLIGRBL6SRHS", value2: "DTUBLIGRBL568" },
      { label: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
      { label: "Configuration", value1: "L-shaped", value2: "L-shaped" },
      { label: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
      { label: "Upholstery Color", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
    ]
  },
  {
    title: "Product",
    specs: [
      { label: "Filling Material", value1: "Foam", value2: "Matte" },
      { label: "Finish Type", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
      { label: "Adjustable Headrest", value1: "No", value2: "yes" },
      { label: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
      { label: "Origin of Manufacture", value1: "India", value2: "India" },
    ]
  },
  {
    title: "Dimensions",
    specs: [
      { label: "Width", value1: "265.32 cm", value2: "265.32 cm" },
      { label: "Height", value1: "76 cm", value2: "76 cm" },
      { label: "Depth", value1: "167.76 cm", value2: "167.76 cm" },
      { label: "Weight", value1: "45 KG", value2: "65 KG" },
      { label: "Seat Height", value1: "41.52 cm", value2: "41.52 cm" },
      { label: "Leg Height", value1: "5.46 cm", value2: "5.46 cm" },
    ]
  },
  {
    title: "Warranty",
    specs: [
      { 
        label: "Warranty Summary", 
        value1: "1 Year Manufacturing Warranty", 
        value2: "1.2 Year Manufacturing Warranty" 
      },
      {
        label: "Warranty Service Type",
        value1: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        value2: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"
      },
      {
        label: "Covered in Warranty",
        value1: "Warranty Against Manufacturing Defect",
        value2: "Warranty of the product is limited to manufacturing defects only."
      },
      {
        label: "Not Covered in Warranty",
        value1: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        value2: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."
      },
      {
        label: "Domestic Warranty",
        value1: "1 Year",
        value2: "3 Months"
      },
    ]
  }
]

export default function ProductComparison() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
        {/* Go to Product Column */}
        <div className="space-y-2 order-1">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight">
            Go to Product page for more Products
          </h2>
          <Link 
            href="/products" 
            className="inline-block text-sm text-gray-500 hover:text-gray-900 border-b border-gray-300"
          >
            View More
          </Link>
        </div>

        {/* Product 1 */}
        <div className="space-y-4 order-3 md:order-2">
          <div className="relative aspect-[4/3] w-full bg-[#FFF9F3] rounded-lg overflow-hidden">
            <Image
              src="/Images/sofa1.png"
              alt="Asgaard Sofa"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Asgaard Sofa</h3>
            <p className="text-base mb-2">Rs. 250,000.00</p>
            <div className="flex items-center gap-2">
              <span className="font-medium">4.7</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(4.7) ? "fill-[#B88E2F] text-[#B88E2F]" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">204 Review</span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="space-y-4 order-4 md:order-3">
          <div className="relative aspect-[4/3] w-full bg-[#FFF9F3] rounded-lg overflow-hidden">
            <Image
              src="/Images/sofa2.png"
              alt="Outdoor Sofa Set"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Outdoor Sofa Set</h3>
            <p className="text-base mb-2">Rs. 224,000.00</p>
            <div className="flex items-center gap-2">
              <span className="font-medium">4.2</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(4.2) ? "fill-[#B88E2F] text-[#B88E2F]" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">145 Review</span>
            </div>
          </div>
        </div>

        {/* Add Product Column */}
        <div className="space-y-2 order-2 md:order-4">
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">Add A Product</h3>
          <Button 
            variant="outline"
            className="w-full justify-between bg-[#B88E2F] text-white hover:bg-[#B88E2F]/90"
          >
            Choose a Product
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Comparison Sections */}
      <div className="overflow-x-auto">
        {comparisonData.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="mb-12 last:mb-8 min-w-[768px]">
            <h4 className="font-semibold text-xl md:text-2xl mb-6 md:mb-8 sticky left-0 bg-white">{section.title}</h4>
            <div className="grid grid-cols-[1.2fr,1.4fr,1.4fr,1fr] gap-x-8 md:gap-x-16">
              {/* Labels Column */}
              <div className="space-y-4 md:space-y-6">
                {section.specs.map((spec, specIndex) => (
                  <div 
                    key={`label-${sectionIndex}-${specIndex}`} 
                    className="text-gray-500 text-sm md:text-base sticky left-0 bg-white"
                  >
                    {spec.label}
                  </div>
                ))}
              </div>

              {/* Product 1 Specs */}
              <div className="space-y-4 md:space-y-6">
                {section.specs.map((spec, specIndex) => (
                  <div 
                    key={`spec1-${sectionIndex}-${specIndex}`} 
                    className="text-black text-sm md:text-base break-words"
                  >
                    {spec.value1}
                  </div>
                ))}
              </div>

              {/* Product 2 Specs */}
              <div className="space-y-4 md:space-y-6">
                {section.specs.map((spec, specIndex) => (
                  <div 
                    key={`spec2-${sectionIndex}-${specIndex}`} 
                    className="text-black text-sm md:text-base break-words"
                  >
                    {spec.value2}
                  </div>
                ))}
              </div>

              {/* Empty Column */}
              <div></div>
            </div>
          </div>
        ))}
      </div>

      {/* Add to Cart Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr,1.5fr,1fr] gap-4 md:gap-8 mt-8 md:mt-16">
        <div className="hidden md:block"></div>
        <Button 
          className="w-full bg-[#B88E2F] text-white hover:bg-[#B88E2F]/90 py-4 md:py-6 text-sm md:text-base"
        >
          Add To Cart
        </Button>
        <Button 
          className="w-full bg-[#B88E2F] text-white hover:bg-[#B88E2F]/90 py-4 md:py-6 text-sm md:text-base"
        >
          Add To Cart
        </Button>
        <div className="hidden md:block"></div>
      </div>
    </div>
  )
}

