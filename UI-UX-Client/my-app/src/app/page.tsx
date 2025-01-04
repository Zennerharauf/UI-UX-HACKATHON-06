import React from 'react'
import HeroSection from './Components/HeroSec'
import BrowseTheRange from './Components/BrowseTheRange'
import BeautifulRooms from './Components/BeautifullRooms'
import FuniroFurniture from './Components/FuniroFurniture'
import { OurProduct } from './Components/OurProduct'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <BrowseTheRange/>
      <OurProduct/>
      <BeautifulRooms/>
      <FuniroFurniture/>
    </div>
  )
}

export default page
