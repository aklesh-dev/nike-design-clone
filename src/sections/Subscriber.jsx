import Button from "../components/Button"


const Subscriber = () => {
  return (
    <section id='contact-us' className='max-container flex justify-between items-center gap-10 max-lg:flex-col'>
      <h3 className='text-4xl leading-[64px] lg:max-w-md font-palanquin font-bold'>
        Sign Up from <span className="text-coral-red">Updates</span> & Newsletter 
      </h3>
      <div className="w-full lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input border border-red-500" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button lable="Sign Up" fullwidth="" />
        </div>
      </div>
    </section>
  )
}

export default Subscriber