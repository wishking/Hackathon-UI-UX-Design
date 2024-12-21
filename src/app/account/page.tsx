import React from 'react'
import HeroSection from './Hero'
import Login from './Login'
import Delivery from './Delivery'
import Navbar from '@/components/Navbar2'

const page = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <Login />
    <Delivery />
    

    </div>
  )
}

export default page