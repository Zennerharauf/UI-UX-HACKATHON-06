'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import Image from 'next/image'
import image1 from '../../../public/Images/Description Sofa 1.png'
import image2 from '../../../public/Images/Description Sofa 2.png'

export default function DynamicProdDesSec() {
  const [activeTab, setActiveTab] = useState("description")
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Tabs defaultValue="description" className="w-full" onValueChange={setActiveTab}>
        <div className='border-t mb-5'></div>
        <TabsList className=" w-full justify-center h-12 bg-transparent p-0 md:space-x-8">
          <TabsTrigger 
            value="description" 
            className={`pb-4  text-xs md:text-base font-medium border-b-2 rounded-none ${
              activeTab === "description" 
                ? "border-black text-black" 
                : "border-transparent text-gray-400"
            }`}
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="additional" 
            className={`pb-4 text-xs md:text-base font-medium border-b-2 rounded-none ${
              activeTab === "additional" 
                ? "border-black text-black" 
                : "border-transparent text-gray-400"
            }`}
          >
            Additional Information
          </TabsTrigger>
          <TabsTrigger 
            value="reviews" 
            className={`pb-4 text-xs md:text-base font-medium border-b-2 rounded-none ${
              activeTab === "reviews" 
                ? "border-black text-black" 
                : "border-transparent text-gray-400"
            }`}
          >
            Reviews [5]
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-8">
          <div className="space-y-6 text-gray-500">
            <div className='md:mx-16 space-y-6'>
            <p>
              Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FFFCF3] p-8">
                <Image 
                  src={image1} 
                  alt="Sofa front view"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-[#FFFCF3] p-8">
                <Image 
                  src={image2}
                  alt="Sofa side view"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        <div className='border-t mt-20'></div>

        </TabsContent>
        
        <TabsContent value="additional">
          <div className="mt-8 text-gray-600">
            Additional information content goes here
          </div>
        </TabsContent>
        
        <TabsContent value="reviews">
          <div className="mt-8 text-gray-600">
            Reviews content goes here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

