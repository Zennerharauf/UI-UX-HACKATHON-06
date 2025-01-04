import React from 'react'
import ComponentLocation from '../Components/ComponentLocation'
import Contact from '../Components/Contact'
import Features from '../Components/Featured'

const page = () => {
  return (
    <div>
      <ComponentLocation title='Contact' location='Contact' />
      <Contact/>
      <Features/>
    </div>
  )
}

export default page
