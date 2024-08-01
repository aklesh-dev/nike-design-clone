import React from 'react'
import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red '> Super </span>
          <span className='text-coral-red '>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Discover the excellence of Nike shoes, where innovation meets superior craftsmanship.  offering style and performance that lasts. </p>
        <p className='mt-6 lg:max-w-lg info-text'> Elevate your performance and style with Nike, where every step is a testament to excellence.</p>
        <div className='mt-11'>
          <Button lable="View Details" />
        </div>
      </div>

      {/* --wrapper for img-- */}
      <div className="flex flex-1 justify-center items-center">
        <img
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality