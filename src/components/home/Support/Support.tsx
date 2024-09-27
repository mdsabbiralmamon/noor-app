import { Button } from '@/components/ui/button';
import CircularProgress from '@/components/ui/circularProgress';
import React from 'react';

const Support = () => {
    return (
        <div className='container mx-auto my-24 p-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='flex-1'>
                    <h3 className='text-xl font-bold'>Support Us</h3>
                    <h2 className='text-4xl md:text-6xl font-bold text-primary'>We Need Your Help</h2>
                    <p>The Weekend School of the Islamic Center of Allah is committed to providing quality Islamic Education according to the Quran.</p>
                    <Button variant="gradient">Donate Now</Button>
                </div>
                <div className='flex-1 flex flex-col lg:flex-row justify-between'>
                    <CircularProgress percentage={56} label="Mosque" circleColor="text-green-500" textColor="text-green-600" lineCap="butt" />
                    <CircularProgress percentage={45} label="Expenses" circleColor="text-pink-500" textColor="text-pink-600" lineCap="butt" />
                    <CircularProgress percentage={74} label="Feed Hungry" circleColor="text-orange-500" textColor="text-orange-600" lineCap="butt" />
                </div>
            </div>
        </div>
    );
};

export default Support;