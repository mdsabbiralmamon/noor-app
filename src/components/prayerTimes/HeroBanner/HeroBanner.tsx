import { Button } from '@/components/ui/button';
import React from 'react';

const HeroBanner = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-center items-center bg-primary-foreground my-12 rounded-lg py-24 shadow-md'>
                {/* Text Section */}
                <div className="max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-4">
                        &quot;Indeed We Belong to Allah,and Indeed to Him We Will Return&quot;
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                    Each Rak&apos;at that the believer performs in Jama&apos;at is better than offering one hundred thousand dinars in charity to the poor.
                    </p>
                    <Button variant="gradient" className='border-4 rounded-full p-4'>Discover More</Button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;