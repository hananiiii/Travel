import React, { useEffect } from 'react';
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  useEffect(() => {
    const inputElement = document.getElementById('input');
    if (inputElement) {
      inputElement.blur();
    }
  }, []); 
  return (
    <header className="fixed bg-white top-0 left-0 right-0  border border-b flex-wrap px-8 py-5 z-[20] mx-auto flex w-full items-center justify-between">
   
      <Link to='/home'><div className=' cursor-pointer flex flex-row gap-4 text-center items-center'>
        <span className='text-3xl text-title_color '>
          <ion-icon name="home-outline"></ion-icon>
        </span>
        <h3 className='text-xl font-normal text-title_color'>ModaHome</h3>
      </div>
      </Link>
      <div>
        <ul className='hidden text-title_color text-lg font-normal list-none lg:flex lg:flex-row gap-12'>
          <li className='cursor-pointer hover:opacity-50 '>Home</li>
          <li className='cursor-pointer hover:opacity-50 '>Promotions</li>
          <li className='cursor-pointer hover:opacity-50 '>Famous</li>
          <li className='cursor-pointer hover:opacity-50 '>Blogs</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
