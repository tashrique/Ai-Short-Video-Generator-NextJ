import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='px-5 py-3 flex items-center justify-between shadow-md'>
            <div className='flex gap-3 items-center'>
                <Image src="/images/logo.svg" alt="logo" width={40} height={40} className='bg-primary rounded-full' />
                <h2 className='font-bold text-xl'>Berkeley Disk: <span className='text-primary'>Ai Short Vids </span></h2>
            </div>

            <div className='flex gap-3 items-center'>
                <Button>Dashboard</Button>
                <UserButton />
            </div>
        </div>
    );
};

export default Header;