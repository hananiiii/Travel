import React from 'react'

const foter = () => {
  return (
    <section className='border-2 border-t-text_color w-auto h-auto flex flex-col justify-center mx-auto mt-32'>
         <div className='flex flex-col gap-4 mt-8 justify-center mx-auto' >
             <h1 className='text-text_color text-4xl font-semibold text-center'>Save your time!</h1>
             <p className='text-text_color font-light text-md text-center '> Join us and dont mess any update</p>
             <input
              type='text'
              placeholder='Email'
              className='px-2 py-2 w-[450px] text-md font-light text-text_color bg-body_color border border-text_color rounded-md'
             />
         </div>
         <div className='flex flex-col justify-center mt-8'>
         <footer class="text-text_color body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
   
    <p class="text-sm text-text_color sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 made with love —
      <a href="https://twitter.com/knyttneve" class="text-text_color ml-1" rel="noopener noreferrer" target="_blank">@hananiiii</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-textx_color">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-textx_color">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-textx_color">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-textx_color">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
         </div>
    </section>
  )
}

export default foter