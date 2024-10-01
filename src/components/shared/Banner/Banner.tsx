import React from 'react';

type BannerProps = {
    title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
    return (
        <div className='bg-gray-50 h-96 w-full flex justify-center items-center'>
            <div className='mt-20 text-center space-y-8'>
                <h3 className='text-primary text-4xl font-semibold'>{title}</h3>
                <h4 className='text-xl text-primary'><a href='/' className='text-black'>home</a>/{title}</h4>
            </div>
        </div>
    );
};

export default Banner;