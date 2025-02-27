import React from 'react'

const Button = ({ lable, iconURL, backgroundColor, borderColor, textColor, fullwidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red  text-white border-coral-red'} rounded-full ${fullwidth && 'w-full'}`}>
      {lable}
      {iconURL && <img src={iconURL} alt='arrow icon' className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button;