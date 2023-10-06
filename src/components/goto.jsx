import React from 'react'
import London_1 from '../assets/london1.jpg'
import London_2 from '../assets/london2.jpg'
import London_3 from '../assets/london3.jpg'
import Button from './button'
const goto = () => {
  return (
    <section className='mt-16 font-font mx-8 text-text_color '>
        <div className="flex flex-wrap">
  <div className="w-full lg:w-1/4 justify-center mx-auto   flex flex-col gap-6 lg:text-start text-center mb-16 ">
    <h1 className="text-3xl font-bold">Come to London</h1>
    <p  className='text-lg font-normal '>"London, the vibrant capital of England, is known for its rich history, iconic landmarks like Big Ben and the Tower Bridge, and its diverse cultural scene."</p>
    <Button ButtonText="see more"/>
  </div>

  <div className="w-[65%] lg:w-[65%]  md:flex gap-12 justify-center mx-auto ">
    <div className="border rounded p-4 md:w-1/2 mb-16 md:mb-0">
      <img className="w-full mb-4" src={London_1} alt="Image" />
      <p className='text-lg font-normal '><span className='text-title_color font-bold text-xl'>115$</span> for per</p>
    </div>
    <div className="border rounded md:mb-0 mb-16 p-4 md:w-1/2">
      <img className="w-full mb-4" src={London_2} alt="Image" />
      <p className='text-lg font-normal '><span className='text-title_color font-bold text-xl'>90$</span> for per</p>
    </div>
    <div className="border rounded  p-4 md:w-1/2 mb-4 md:mb-0">
      <img className="w-full mb-4" src={London_3} alt="Image" />
      <p className='text-lg font-normal '><span className='text-title_color font-bold text-xl'>100$</span> for per</p>
    </div>
  </div>

  
</div>

     

    </section  >
  )
}

export default goto