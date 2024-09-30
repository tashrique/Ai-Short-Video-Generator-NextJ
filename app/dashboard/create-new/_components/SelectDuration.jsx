"use client";
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const SelectDuration = ({ onUserSelect }) => {

    return (
        <div className='mt-10'>
            <h2 className='font-bold text-primary text-xl'>Duration</h2>
            <p className='text-gray-500'>How long do you want your video to be?</p>

            <Select onValueChange={(value) => {
                value != 'Custom Prompt' && onUserSelect('duration', value)
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='30'>30 seconds</SelectItem>
                    <SelectItem value='60'>60 seconds</SelectItem>
                </SelectContent>
            </Select>



        </div>
    );
};

export default SelectDuration;