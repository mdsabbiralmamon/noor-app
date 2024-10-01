import HeroBanner from '@/components/prayerTimes/HeroBanner/HeroBanner';
import Banner from '@/components/shared/Banner/Banner';
import React from 'react';

const PrayerTimes = () => {
    return (
        <div>
            <Banner title={'Prayer Times'} />
            <div className='container mx-auto'>
                <HeroBanner />
            </div>
        </div>
    );
};

export default PrayerTimes;