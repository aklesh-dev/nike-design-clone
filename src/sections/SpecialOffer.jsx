import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffer = () => {
  return (
    <section className="flex justify-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="img" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>          
          <span className='text-coral-red '>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Discover the excellence where innovation meets superior craftsmanship. offering style and performance that lasts. </p>
        <p className='mt-6 lg:max-w-lg info-text'> Elevate your performance and style with Nike, where every step is a testament to excellence.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button lable="Shop now" iconURL={arrowRight} />
          <Button lable="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer