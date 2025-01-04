import React from 'react'
import ComponentLocation from '../Components/ComponentLocation'
import Features from '../Components/Featured'
import CartPage from '../Components/Cartpage'


const page = () => {
  return (
    <div>
      <ComponentLocation title='Cart' location='Cart' />
      <CartPage/>
      <Features/>
    </div>
  )
}

export default page
