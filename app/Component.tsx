import React from 'react';
import Image from 'next/image';
import { IoSearchCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-screen bg-white text-black px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          height={100}
          width={100}
          className="rounded-full mr-4"
        />
        <h1 className="text-2xl font-bold">The Blessed Only</h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <li className="hover:text-gray-400">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/Stories">Stories</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/Sales">Sales</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/Contact">Contact</a>
        </li>
      </nav>
      <div className="flex-row items-center flex space-x-5 pl-40">
        <IoSearchCircle size={27} />
        <FaUserCircle size={22} />
        <FaShieldHeart size={21} />
        <FaShoppingCart size={20} />
      </div>
    </header>
  );
};

export default Header;
