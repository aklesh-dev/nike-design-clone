import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImg, bigShoeImg}) => {

    const handleClick = () => {
        // --
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImg(imgURL.bigShoe);
      }
    }
    


  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={imgURL.thumbnail} alt="lshoe collection" width={127} height={103} className='object-contain' />
        </div>
    </div>
  )
}

export default ShoeCard;