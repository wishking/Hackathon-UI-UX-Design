import React from 'react'
import CartHero from './Hero';
import Total from './Total';
import Delivery from './Delivery';

const HeroSection= () => {
  return (
    <div>
        <CartHero />
        <Total />
        <Delivery />
    </div>
  )
}

export default HeroSection;


