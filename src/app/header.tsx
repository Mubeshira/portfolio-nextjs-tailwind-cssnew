"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and close icons from react-icons
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initializes AOS with a 1000ms animation duration
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className='flex justify-between items-center p-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'
      data-aos="fade-down" // Apply AOS animation to the header
    >
      <div className='flex items-center'>
        <h1 className='text-4xl ml-4 italic animate-bounce' data-aos="fade-up">Mubeshira</h1>
      </div>

      {/* Desktop Menu */}
      <nav className='hidden md:flex space-x-4 mr-4 '>
        <Link href="/" className='hover:bg-white hover:text-black rounded-full p-2 text-xl' data-aos="fade-right">Home</Link>
        <Link href="/about" className='hover:bg-white hover:text-black rounded-full p-2 text-xl' data-aos="fade-right">About</Link>
        <Link href="/projects" className='hover:bg-white hover:text-black rounded-full p-2 text-xl' data-aos="fade-right">Projects</Link>
        <Link href="/contact" className='hover:bg-white hover:text-black rounded-full p-2 text-xl' data-aos="fade-right">Contact</Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden mr-4 " onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className=" top-16 left-0 w-full  text-white flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden">
          <Link href="/" className='hover:bg-white hover:text-black rounded-full p-2' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className='hover:bg-white hover:text-black rounded-full p-2' onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" className='hover:bg-white hover:text-black rounded-full p-2' onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className='hover:bg-white hover:text-black rounded-full p-2' onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;


 






