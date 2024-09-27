import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-primary-foreground p-8 max-w-3xl rounded-lg shadow-lg mx-auto">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Follow us For further information
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          for daily updates follow us on social media and subscribe to our newsletter
        </p>
        {/* Newsletter Form */}
        <form className="flex justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 w-full rounded-l-full text-gray-600 shadow focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-[#39ff14] text-white py-3 px-6 rounded-r-full font-semibold shadow-md hover:opacity-90 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
