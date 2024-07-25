"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-100 sticky top-0 z-50 w-full">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-black"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="text-xl font-semibold text-black">Gabriel Bento</span>
        </a>
        <button
          className="md:hidden flex items-center text-black"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`hidden md:flex gap-6 text-sm font-medium text-grey-400 hover:text-grey-400`}>
          <a href="#" className="hover:text-grey-400">Projetos</a>
          <a href="#" className="hover:text-grey-400">Pricing</a>
          <a href="#" className="hover:text-grey-400">Contact</a>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black p-4`}>
        <nav className="flex flex-col gap-4 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-grey-400">Projetos</a>
          <a href="#" className="hover:text-grey-400">Pricing</a>
          <a href="#" className="hover:text-grey-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
