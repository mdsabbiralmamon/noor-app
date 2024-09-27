import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import schoolImg from '../../../../public/images/school.png';

const School = () => {
    return (
        <div>
            <div className='container px-8 py-24 mx-auto h-[1080px] flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
                {/* Text Section */}
                <div className="flex-1">
                    <span className="inline-block bg-white text-primary font-semibold py-2 px-4 rounded-full text-sm mb-4 shadow-md bg-primary-foreground">
                        Islamic School
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-4">
                        Seek knowledge from the cradle to the grave.
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        The Weekend School of the Islamic Center of Allah is committed to providing quality Islamic Education according to the Quran and the Sunnah of the Prophet Mohammed (Peace Be upon Him) to a diverse student population in the greater area.
                    </p>
                    {/* Academic Table Data */}
                    <table className="table-auto border-separate mb-4" style={{ borderSpacing: '0 10px' }}>
                        <thead>
                            <tr className='bg-gradient-to-r from-[#f6d365] to-[#fda085] shadow-lg'>
                                <th className="md:px-4 py-2 rounded-l-lg">School Calendar</th>
                                <th className="md:px-4 py-2">Fall Semester</th>
                                <th className="md:px-4 py-2 rounded-r-lg">Spring Semester</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white shadow-lg'>
                                <td className="md:px-4 py-2 rounded-l-lg">First day</td>
                                <td className="md:px-4 py-2">12.5.2020</td>
                                <td className="md:px-4 py-2 rounded-r-lg">1.12.2021</td>
                            </tr>
                            <tr className='bg-white shadow-lg'>
                                <td className="md:px-4 py-2 rounded-l-lg">Late registration</td>
                                <td className="md:px-4 py-2">12.5.2020</td>
                                <td className="md:px-4 py-2 rounded-r-lg">1.12.2021</td>
                            </tr>
                            <tr className='bg-white shadow-lg'>
                                <td className="md:px-4 py-2 rounded-l-lg">Last day</td>
                                <td className="md:px-4 py-2">12.5.2020</td>
                                <td className="md:px-4 py-2 rounded-r-lg">1.12.2021</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button variant="gradient" className='shadow-lg p-4'>Know More</Button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center">
                    <Image src={schoolImg.src} alt="Hero" width={800} height={800} />
                </div>
            </div>
        </div>
    );
};

export default School;