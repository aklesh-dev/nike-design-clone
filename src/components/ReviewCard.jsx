import React from 'react'
import { star } from '../assets/icons';

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt={customerName} className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='mt-6 info-text text-center max-w-sm'>{feedback}</p>
        <div className='flex justify-center items-center gap-2.5 mt-3'>
            <img src={star} width={24} height={24} className='object-contain m-0' alt="" />
            <p className='font-montserrat text-xl text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin font-bold text-3xl text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard;