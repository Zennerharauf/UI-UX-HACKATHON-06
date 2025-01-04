import React from 'react'
import Image from 'next/image'
import furnitureimage1 from '../../../public/Images/fonirofurniture1.png'
import furnitureimage2 from '../../../public/Images/fonirofurniture2.png'
import furnitureimage3 from '../../../public/Images/fonirofurniture3.png'
import furnitureimage4 from '../../../public/Images/fonirofurniture4.png'
import furnitureimage5 from '../../../public/Images/fonirofurniture5.png'
import furnitureimage6 from '../../../public/Images/fonirofurniture6.png'
import furnitureimage7 from '../../../public/Images/fonirofurniture7.png'
import furnitureimage8 from '../../../public/Images/fonirofurniture8.png'
import furnitureimage9 from '../../../public/Images/fonirofurniture9.png'

const FuniroFurniture = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center font-sans text-lg text-gray-400 font-bold py-6 md:py-8">
        Share your setup with
        <div className="text-3xl md:text-4xl text-black mt-2">#FuniroFurniture</div>
      </h1>
      
      <div className="md:grid md:grid-cols-5 md:gap-2 md:h-[90vh]">
        {/* First column */}
        <div className="relative h-80 md:h-full mb-4 md:mb-0">
          <Image
            src={furnitureimage1}
            alt="Shelf setup"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Second column */}
        <div className="md:flex md:flex-col md:gap-2 md:h-full">
          <div className="relative h-80 md:h-[60%] mb-4 md:mb-0">
            <Image
              src={furnitureimage2}
              alt="Workspace setup"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 md:h-[40%] mb-4 md:mb-0">
            <Image
              src={furnitureimage6}
              alt="Vintage chair"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Third column */}
        <div className="md:flex md:flex-col md:gap-2 md:h-full">
          <div className="relative h-80 md:h-[40%] mb-4 md:mb-0">
            <Image
              src={furnitureimage7}
              alt="Side tables"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 md:h-[60%] mb-4 md:mb-0">
            <Image
              src={furnitureimage3}
              alt="Dining room"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Fourth column */}
        <div className="md:flex md:flex-col md:gap-2 md:h-full">
          <div className="relative h-80 md:h-[65%] mb-4 md:mb-0">
            <Image
              src={furnitureimage4}
              alt="Bedroom"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 md:h-[35%] mb-4 md:mb-0">
            <Image
              src={furnitureimage8}
              alt="Wall decor"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Fifth column */}
        <div className="md:flex md:flex-col md:gap-2 md:h-full">
          <div className="relative h-80 md:h-[55%] mb-4 md:mb-0">
            <Image
              src={furnitureimage5}
              alt="Dining area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 md:h-[45%] mb-4 md:mb-0">
            <Image
              src={furnitureimage9}
              alt="Kitchen detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuniroFurniture

