import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Image src={`/images/noor-app-logo.png`} alt="Noor Logo" width={150} height={50} />
            <p>
              Learn and practice islam with our noor app and come closer to Allah.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-red-500">
                <FaGooglePlusG />
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Service</h3>
            <ul className="space-y-2 ">
              <li><a href="#">Islamic School</a></li>
              <li><a href="#">Our Causes</a></li>
              <li><a href="#">Our Service</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Event</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Useful Links</h3>
            <ul className="space-y-2 ">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Semester</a></li>
              <li><a href="#">Prayer Times</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Contact</h3>
            <p className=" mb-2">
              online store with lots of cool and exclusive wpo-features.
            </p>
            <p className=" mb-2">
              <span className="font-semibold">Address:</span> 28 Street, New York City, USA
            </p>
            <p className=" mb-2">
              <span className="font-semibold">Phone:</span> +000123456789
            </p>
            <p className="">
              <span className="font-semibold">Email:</span> noor@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          © 2021 Noor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
