import React from 'react';

const PrayerTimes = () => {
    return (
        <div>
            <div className='container px-8 py-24 mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='flex-1 space-y-4'>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                        Prayer Times
                    </h1>
                    <p className="text-lg">
                        Prayer times in your city
                    </p>
                    <p className='text-primary underline'>
                        <a href="#">Monday, 20th September 2021</a>
                    </p>
                </div>
                <div className='flex-1 space-y-4'>
                    <div className='flex justify-end'>
                        <div className='w-full md:w-4/5 flex justify-between p-4 rounded-xl bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] text-white shadow hover:from-[#c2e9fb] hover:to-[#a1c4fd] cursor-pointer'>
                            <h3 className='text-2xl font-semibold'>Fajr</h3>
                            <p className='text-lg'>5:00 AM</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-full md:w-4/5 flex justify-between p-4 rounded-xl bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] text-white shadow hover:from-[#fcb69f] hover:to-[#ffecd2] cursor-pointer'>
                            <h3 className='text-2xl font-semibold'>Sunrise</h3>
                            <p className='text-lg'>5:00 AM</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='w-full md:w-4/5 flex justify-between p-4 rounded-xl bg-gradient-to-r from-[#f6d365] to-[#fda085] text-white shadow hover:from-[#fda085] hover:to-[#f6d365] cursor-pointer'>
                            <h3 className='text-2xl font-semibold'>Dhuhr</h3>
                            <p className='text-lg'>5:00 AM</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-full md:w-4/5 flex justify-between p-4 rounded-xl bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] text-white shadow hover:from-[#8fd3f4] hover:to-[#84fab0] cursor-pointer'>
                            <h3 className='text-2xl font-semibold'>Asr</h3>
                            <p className='text-lg'>5:00 AM</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='w-full md:w-4/5 flex justify-between p-4 rounded-xl bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] text-white shadow hover:from-[#fbc2eb] hover:to-[#a18cd1] cursor-pointer'>
                            <h3 className='text-2xl font-semibold'>Magrib</h3>
                            <p className='text-lg'>5:00 AM</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-full md:w-4/5 flex justify-between p-4 rounded-xl bg-gradient-to-r from-[#fad0c4] to-[#ffd1ff] text-white shadow hover:from-[#ffd1ff] hover:to-[#fad0c4] cursor-pointer'>
                            <h3 className='text-2xl font-semibold'>Esha</h3>
                            <p className='text-lg'>5:00 AM</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrayerTimes;