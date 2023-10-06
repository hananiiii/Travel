import React from 'react'
import Carousel from './carousel'

const discover = () => {
  return (
    <section className='font-font mt-32 mx-16'>
    <div className='mb-12'>
      <h1 className='text-3xl font-semibold text-text_color  flex lg:justify-start justify-center mx-auto mb-2'>Discover places</h1>
      <p className='font-normal text-lg text-text_color flex lg:justify-start justify-center lg:text-start text-center  mx-auto'>
        Explore our latest blog posts for travel inspiration and tips.
      </p>
    </div>
    <Carousel/>

    </section>
  )
}

export default discover