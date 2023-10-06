import React from 'react';
import Fam_1 from '../assets/fam1.jpg';
import Fam_2 from '../assets/fam2.jpg';
import Fam_3 from '../assets/fam3.jpg';
import Fam_4 from '../assets/fam4.jpg';
import Fam_6 from '../assets/london1.jpg';
import Fam_5 from '../assets/alexander-schimmeck-ja6Dv8Z7myk-unsplash.jpg';

const Famous = () => {
  const famousPlaces = [
    { image: Fam_1, country: 'Egypt' },
    { image: Fam_2, country: 'U.S.A' },
    { image: Fam_3, country: 'Germany' },
    { image: Fam_4, country: 'Indea' },
    { image: Fam_5, country: 'Japan' },
    { image: Fam_6, country: 'London' },
  ];

  return (
    <section className='font-font mt-32 mx-16'>
      <div className='mb-12'>
        <h1 className='text-3xl font-semibold text-text_color  flex lg:justify-start justify-center mx-auto mb-2'>Famous places</h1>
        <p className='font-normal text-lg text-text_color flex lg:justify-start justify-center lg:text-start text-center mx-auto'>
          famous places around the world captivate the hearts and  imaginations of travelers everywhere."
        </p>
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-6'>
        {famousPlaces.map((place, index) => (
          <div key={index} className={`relative ${index < 2 ? 'col-span-2' : ''}`}>
            <img src={place.image} className=' rounded-lg cursor-pointer w-full h-[250px] object-container' />
            <div className='absolute top-2 right-2 bg-body_color p-2 rounded'>
              <span className='text-text_color text-lg font-medium'>{place.country}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Famous;
