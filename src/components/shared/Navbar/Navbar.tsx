'use client';

import Link from 'next/link';
import React from 'react';
import { Menu, X } from "lucide-react";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const pathname = usePathname(); // Hook to get the current active route

    const menus = [
        { title: "Home", path: "/" },
        { title: "Prayer Times", path: "/prayer-times" },
        { title: "Quran", path: "/quran" },
        { title: "Blog", path: "/blog" },
    ];

    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <div>
            <motion.nav
                className="bg-white shadow-lg w-full border-b md:border-0 fixed top-0 z-50"
                initial={{ y: '-100%' }}  // Start the navbar off-screen (above the view)
                animate={{ y: 0 }}  // Slide it into view
                transition={{ type: 'spring', stiffness: 100, damping: 20 }} // Added a spring effect for smooth motion
            >
                <div className="items-center px-4 max-w-screen mx-auto md:flex md:justify-between md:px-8">
                    {/* Left Side - Logo */}
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <motion.h1
                                className="text-3xl font-bold text-green-600"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                Noor
                            </motion.h1>
                        </Link>
                        <div className="md:hidden">
                            {/* Hamburger Menu Button with Animation */}
                            <motion.button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {menuOpen ? <X /> : <Menu />}
                            </motion.button>
                        </div>
                    </div>

                    {/* Middle - Navigation Links for medium and larger screens */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <ul className="flex space-x-6">
                            {menus.map((item, idx) => (
                                <li key={idx} className="relative text-gray-600 hover:text-green-600">
                                    <Link href={item.path}>
                                        <span
                                            className={`relative group ${pathname === item.path ? 'font-bold text-green-600' : ''
                                                }`}
                                        >
                                            {item.title}
                                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side - Login/Signup Buttons for medium and larger screens */}
                    <div className="hidden md:flex gap-2">
                        <Button>Login</Button>
                        <Button variant="secondary">Signup</Button>
                    </div>
                </div>

                {/* Sliding Menu for Small Screens */}
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: menuOpen ? '0%' : '-100%' }}
                    transition={{ type: 'tween', duration: 0.3 }}
                    className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg md:hidden"
                >
                    <div className="p-4 flex flex-col">
                        <ul className="space-y-6">
                            {menus.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-green-600">
                                    <Link href={item.path} onClick={handleLinkClick}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-2">
                            <Button onClick={handleLinkClick}>Login</Button>
                            <Button variant="secondary" onClick={handleLinkClick}>Signup</Button>
                        </div>
                    </div>
                </motion.div>

                {/* Overlay for when menu is open (click to close the menu) */}
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black opacity-50 md:hidden"
                        onClick={() => setMenuOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </motion.nav>
        </div>
    );
};

export default Navbar;
