'use client';
import { FileVideo, PanelsTopLeft, ShieldIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideNav = () => {

    const menuitems = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: 'Create New',
            path: '/dashboard/create-new',
            icon: FileVideo
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/upgrade',
            icon: ShieldIcon
        },
        {
            id: 4,
            name: 'Account',
            path: '/account',
            icon: UserIcon
        }
    ]


    const path = usePathname();

    return (
        <div>
            <div className='w-64 h-screen shadow-md p-5'>
                <div className='grid gap-3'>
                    {
                        menuitems.map((item) => (
                            <Link href={item.path} key={item.id}>
                                <div key={item.id} className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-md ${path == item.path ? 'bg-primary text-white' : ""}`}>
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SideNav;