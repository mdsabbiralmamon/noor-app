
import Image from 'next/image';
import React from 'react';
import mosqueImg from '../../../../public/images/mosque.png';
import Counter from '@/components/ui/counter';

const MosqueDev = () => {
    return (
        <div>
            <div className='container px-8 py-24 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center">
                    <Image src={mosqueImg.src} alt="Hero" width={800} height={800} />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <span className="inline-block bg-white text-primary font-semibold py-2 px-4 rounded-full text-sm">
                        Mosque Development
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                        Come to the Mosque for your spritual treatment
                    </h1>
                    <p className="text-lg text-gray-600">
                        The Weekend School of the Islamic Center of Allah is committed to providing quality Islamic Education according to the Quran and the Sunnah of the Prophet Mohammed (Peace Be upon Him) to a diverse student population in the greater area.
                    </p>
                    <div className='flex justify-evenly flex-col md:flex-row'>
                        <Counter countTo={45} label="New Mosque" />
                        <Counter countTo={35} label="Old Mosque" />
                        <Counter countTo={90} label="Imams" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MosqueDev;