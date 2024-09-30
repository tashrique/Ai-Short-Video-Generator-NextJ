import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            <div>
                <Image src="/images/login.png" alt="logo" width={700} height={500}
                    className='object-cover h-screen'
                />

            </div>

            <div className='flex justify-center items-center h-screen'>
                <SignIn />
            </div>
        </div>
    )
}