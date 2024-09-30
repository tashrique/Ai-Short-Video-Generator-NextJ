'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const SelectStyle = ({ onUserSelect }) => {


    const styleOptions = [
        {
            name: 'Realistic',
            image: '/images/realistic.png'
        },
        {
            name: 'Cartoon',
            image: '/images/cartoon.jpg'
        },
        {
            name: 'Comic',
            image: '/images/comic.jpg'
        },
        {
            name: 'Pixel',
            image: '/images/pixel.jpg'
        },
        {
            name: 'GTA',
            image: '/images/gta.png'
        },
        {
            name: 'Watercolor',
            image: '/images/watercolor.jpg'
        },

    ]
    const [selectedOption, setSelectedOption] = useState('')



    return (
        <div className='mt-10'>
            <h2 className='font-bold text-primary text-xl'>Style</h2>
            <p className='text-gray-500'>Select your video style.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-3'>
                {styleOptions.map((style, index) =>
                    <div className={`relative hover:scale-105 transition-all pb-8`}
                        key={index}
                        onClick={() => {
                            setSelectedOption(style.name)
                            onUserSelect('style', style.name)
                        }}

                    >
                        <Image src={style.image} alt={style.name} width={100} height={100}
                            className='h-48 object-cover rounded-t-lg cursor-pointer w-full'
                        />
                        <h2 className={`absolute p-1  b-0 w-full text-white text-center rounded-b-lg ${selectedOption === style.name ? 'bg-primary' : 'bg-black'}`}>{style.name}</h2>

                    </div>)
                }
            </div>

        </div>
    );
};

export default SelectStyle;