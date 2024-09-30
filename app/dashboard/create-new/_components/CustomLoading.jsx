import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image';


const CustomLoading = ({ loading }) => {
    return (
        <div>
            <AlertDialog open={loading}>
                <AlertDialogContent className="">
                    <div className='flex flex-col items-center justify-center my-10'>
                        <Image src='/icons/cook.gif' width={100} height={100} />
                        <h2>Generating your video. Do not refresh!</h2>
                    </div>
                </AlertDialogContent>
            </AlertDialog>

        </div >
    );
};

export default CustomLoading;