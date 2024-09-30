'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';

const CreateNew = () => {


    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const onHandleInputChange = (fieldName, fieldValue) => {
        setFormData({ ...formData, [fieldName]: fieldValue })
    }


    // Get video Script
    const getVideoScript = async () => {
        setLoading(true)
        const prompt = "Write a very creative interesting script to generate " + formData.duration + " seconds video on topic: " + formData.topic + " along with Ai image prompt in " + formData.style + " format for each scene and give me result in JSON format with imagePrompt and contentText as fields"

        const result = await axios.post('/api/get-video-script', { prompt: prompt })
            .then(resp => {
                // json
                const data = JSON.parse(resp.data.result)
                console.log(data)
            });
        setLoading(false)
    }


    const onCreateClickHandler = () => {
        getVideoScript()
    }


    return (
        <div className='md:px-20' >
            <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>


            <div className='mt-10 p-10 shadow-md'>
                {/* Select Topic */}
                <SelectTopic onUserSelect={onHandleInputChange} />

                {/* Select Style */}
                <SelectStyle onUserSelect={onHandleInputChange} />

                {/* Duration */}
                <SelectDuration onUserSelect={onHandleInputChange} />

                {/* Create Button */}
                <Button className='w-full mt-10 active:bg-black' onClick={onCreateClickHandler}>Create</Button>

                <CustomLoading loading={loading} />



            </div>

        </div >
    );
};

export default CreateNew;