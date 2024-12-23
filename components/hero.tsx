"use client"

import CustomButton from './CustomButton'
import Image from 'next/image';
import Img from '../public/hero.png'





const Hero = () => {
   const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }


    }
   

  return (
    <div className='hero'>
     <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold ">
            Find, book or rent  car -- quickly and easily!
        </h1>


        <p className=" text-[27px] text-black-100 font-light mt-5">
            streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
        title="Expore Cars"
        containerStyles="bg-primary text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
     </div>
     <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
     <Image src="/hero.png" alt="alt" fill className='object-contain' />  
     <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden'/>
        </div>
        
     </div>
    </div>
  )
}

export default Hero
