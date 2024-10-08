import { Button } from '@/components/ui/button';
import React from 'react';
import heroFeatureImg from '../../../../public/images/heroFeatureImage.png';
import './Hero.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            <div className="curved">
                <div className='container px-8 py-24 mx-auto h-[1080px] flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
                    {/* Text Section */}
                    <div className="flex-1">
                        <span className="inline-block bg-white text-primary font-semibold py-2 px-4 rounded-full text-sm mb-4">
                            Let{"'"}s Know Islam
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-4">
                            Read! In the Name of your Lord, Who has created
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            We are the best Educational Organization. Let{"'"}s know about Islam and the Holy Quran!
                        </p>
                        <Button variant="gradient" className='border-4 rounded-full p-4'>Discover More</Button>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <Image src={heroFeatureImg.src} alt="Hero" width={800} height={800} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
