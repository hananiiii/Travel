import React from 'react';
import smallImage2 from '../assets/two.jpg'
import BlogImage from '../assets/blog.jpg'
import smallImage3 from '../assets/three.jpg'
import smallImage1 from '../assets/one.jpg'
import smallImage4 from '../assets/babor.jpg'


const Blog = () => {
  return (
    <section className='font-font mt-32 mx-16'>
      <div className='mb-12'>
        <h1 className='text-3xl font-semibold text-text_color  flex lg:justify-start justify-center mx-auto mb-2'>Our Blogs</h1>
        <p className='font-normal text-lg text-text_color flex lg:justify-start justify-center lg:text-start text-center  mx-auto'>
          Explore our latest blog posts for travel inspiration and tips.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <div className='relative'>
            <img src={BlogImage} className='rounded-lg  cursor-pointer w-full  lg:h-[528px] h-[350px] object-cover' />
            <div className='absolute top-2 left-2 bg-body_color p-2 rounded'>
              <span  className='text-text_color text-lg font-medium '>Blog Title</span>
            </div>
            <div className='absolute lg:block hidden bottom-2  left-2  p-2 rounded'>
              <span  className='text-body_color text-lg font-medium '>
                   <h1 className='text-2xl mb-2 font-bold'>Try various restaurant</h1>
                   <p className='text-lg font-semibold max-w-xl'>While dining out in Singapore can be comparable to prices in other major international cities, there are numerous wallet-friendly options available for those seeking to savor Singaporean cuisine without straining their budgets.</p>
              </span>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-1 grid-cols-2 gap-6'>
          <div>
            <div className='relative lg:border border-text_color rounded-lg'>
            <div className='flex flex-row gap-2'>
              <img src={smallImage1} className='rounded-lg inline-block lg:px-4 lg:py-3 cursor-pointer lg:w-[40%] w-full h-[160px] object-cover' />
              <div className='lg:flex lg:flex-col gap-2 hidden px-1 py-3'>
                <h1 className='text-xl font-bold text-text_color '>Blog title</h1>
                <p className='text-md font-light text-text_color '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              </div>
              <div className=' lg:hidden block absolute top-2 left-2 bg-body_color p-2 rounded'>
              <span  className='text-text_color text-lg font-medium '>Blog Title</span>
            </div>
            </div>
          </div>
          <div>
            <div className='relative lg:border border-text_color rounded-lg'>
                <div className='flex flex-row gap-2'>
              <img src={smallImage2} className='rounded-lg inline-block lg:px-4 lg:py-3 cursor-pointer lg:w-[40%] w-full h-[160px] object-cover' />
              <div className='lg:flex lg:flex-col gap-2 hidden px-1 py-3'>
                <h1 className='text-xl font-bold text-text_color '>Blog title</h1>
                <p className='text-md font-light text-text_color '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              </div>
              <div className=' lg:hidden block absolute top-2 left-2 bg-body_color p-2 rounded'>
              <span  className='text-text_color text-lg font-medium '>Blog Title</span>
            </div>
            </div>
          </div> 
          <div>
            <div className='relative lg:border border-text_color rounded-lg'>
            <div className='flex flex-row gap-2'>
              <img src={smallImage3} className='rounded-lg inline-block lg:px-4 lg:py-3 cursor-pointer lg:w-[40%] w-full h-[160px] object-cover' />
              <div className='lg:flex lg:flex-col gap-2 hidden px-1 py-3'>
                <h1 className='text-xl font-bold text-text_color '>Blog title</h1>
                <p className='text-md font-light text-text_color '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              </div>
              <div className=' lg:hidden block absolute top-2 left-2 bg-body_color p-2 rounded'>
              <span  className='text-text_color text-lg font-medium '>Blog Title</span>
            </div>
            </div>
          </div> 
          <div>
            <div className='relative lg:border border-text_color rounded-lg lg:hidden block'>
              <img src={smallImage4} className='rounded-lg lg:px-4 lg:py-3 cursor-pointer lg:w-[40%] w-full h-[160px] object-cover' />
              <div className=' lg:hidden block absolute top-2 left-2 bg-body_color p-2 rounded'>
              <span  className='text-text_color text-lg font-medium '>Blog Title</span>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
