import { Button } from '@/components/ui/button';
import React from 'react';
import aboutFeatureImg from '../../../../public/images/about-us.png';
import Image from 'next/image';

const About = () => {
    return (
        <div className='my-24'>
            <div className='container px-8 py-24 mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center">
                    <Image src={aboutFeatureImg.src} alt="A man reading quran" width={800} height={800} />
                </div>

                {/* Text Section */}
                <div className="flex-1 p-8">
                    {/* <!-- About Us Section Title --> */}
                    <h3 className="text-primary text-lg font-semibold">About US</h3>

                    {/* <!-- Main Heading --> */}
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        Seeking of knowledge is a duty of every Muslim
                    </h1>

                    {/* <!-- Supporting Paragraph --> */}
                    <p className="text-base md:text-lg mt-4 max-w-3xl mx-auto">
                        The rise of Muslims to the zenith of civilization in a period of four decades was based on Islam{"'"}s emphasis on learning. This is obvious when one takes a look at the Quran and the traditions of Prophet Muhammad which are filled with references to learning, education, observation.
                    </p>

                    {/* <!-- Buttons --> */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 my-4">
                        {/* <!-- Discover More Button --> */}
                        <Button variant="gradient" className='border-4 rounded-full p-4'>Discover More</Button>

                        {/* <!-- Watch Our Video Button --> */}
                        <div>
                            <a href="#" className="flex items-center  hover:text-primary transition-all font-semibold">
                                {/* <!-- Play Icon --> */}
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex justify-center items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6 4a1 1 0 00-1 1v10a1 1 0 001.528.846l8-5a1 1 0 000-1.692l-8-5A1 1 0 006 4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                Watch Our Video
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;