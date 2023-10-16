import React from 'react'
import Trav from '../assets/travelling.jpg'
import Loc from '../assets/loc.jpg'
import Button from './button'
const promotions = () => {
  return (
    <section className='mt-32 font-font mx-8 '>
        <div className='mb-12'>
         <h1 className='text-3xl font-semibold text-text_color  flex lg:justify-start justify-center mx-auto mb-2'>Promotions</h1>
         <p className='font-normal text-lg text-text_color flex lg:justify-start justify-center mx-auto '>"Travel promotions mean exciting savings on trips!"</p> 
         </div>
         <div className='flex lg:flex-row flex-col gap-6  '>
               <div className='lg:w-1/2 w-full rounded-lg '>
                <img src={Trav}  className='w-full  rounded-lg h-[300px] object-cover '/>
               </div>
               <div className='lg:w-1/2 w-full flex flex-rox gap-4 rounded-lg '>
                
                <img src={Loc}  className='w-1/2 lg:block sm:block hidden   rounded-lg h-[300px] object-cover '/>
                <div className='lg:px-4 flex flex-col gap-4  justify-center mx-auto'>
                <h1 className='text-2xl font-semibold text-text_color'>Finding the perfect place to stay is the first step to a memorable trip.</h1>
                <p className='text-text_color font-normal text-lg'>Searching for accommodations sets the foundation for a great travel experience.</p>
                  <Button ButtonText="Register now"/>
                </div>
               </div>
         </div>
    </section>
  )
}

export default promotions