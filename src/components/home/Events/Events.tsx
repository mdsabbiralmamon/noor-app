import Image from 'next/image';
import React from 'react';

const events = [
  {
    date: "25 Nov",
    title: "Learn About Hajj",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imageSrc: "/images/hajjEvent.jpg",
  },
  {
    date: "25 Nov",
    title: "Islamic Teaching Event",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imageSrc: "/images/islamicTeaching.jpg",
  },
];

const Events = () => {
  return (
    <section className="py-12 text-center">
      {/* Section Title */}
      <h3 className='text-xl font-bold'>Our Events</h3>
      <h2 className="text-4xl md:text-6xl font-bold text-primary">
        Our Upcoming Event
      </h2>

      <div className="flex justify-center gap-8 mt-8">
        {/* Map through the events and create the event cards */}
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              {/* Event Image */}
              <Image
                src={event.imageSrc}
                alt={event.title}
                className="object-cover"
                width={500}
                height={300}
              />
              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white p-2 rounded-lg text-sm font-semibold">
                {event.date}
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="mt-2 text-gray-600">
                <span className="inline-block mr-2">
                  <i className="fas fa-clock"></i> {event.time}
                </span>
                <span className="inline-block">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </span>
              </p>
              <p className="mt-4 text-gray-600">{event.description}</p>
              <a href="#" className="mt-4 inline-block text-blue-500">
                Learn More...
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
