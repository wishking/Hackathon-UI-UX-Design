import React from 'react'
import HeroSection from './Hero'
import Billing from './Billing'
import Delivery from './Delivery'
import Navbar from '@/components/Navbar2'
const page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Billing />
        <Delivery />
        
    </div>
  )
}

export default page