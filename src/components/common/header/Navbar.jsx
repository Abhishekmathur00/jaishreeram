"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/aboutus",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    path: "/services",
  },
  {
    id: 4,
    title: "Why Choose Us",
    newTab: false,
    path: "/whychooseus",
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contactus",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const UnderlineAnimation = ({ isActive }) => (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isActive ? "w-full" : "w-0"
      } absolute bottom-0 left-0 h-1 bg-orange-400`}
    />
  );

  return (
    <nav className="bg-white overflow-x-hidden">
      <div className="container mx-auto grid grid-cols-12 items-center">
        <div className="col-start-1 col-span-2 md:col-start-3 md:col-span-2">
          <a href="/">
          <Image src="/logo/jsrLogo.png" width={120} height={120} alt="Logo"/></a>
        </div>

        <div className="col-span-8 hidden md:flex md:col-span-6 justify-center space-x-8">
          {data.map((d) => (
            <Link key={d.id} href={d.path} passHref>
              <div
                className="relative group text-black text-lg font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleLinkClick}
                target={d.newTab ? "_blank" : "_self"}
                rel={d.newTab ? "noopener noreferrer" : ""}
              >
                <span className="inline-block hover:text-orange-400 ">{d.title}</span>
                <UnderlineAnimation isActive={isOpen} />
              </div>
            </Link>
          ))}
        </div>

        <div className="col-start-11 col-span-2 md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            {data.map((d) => (
              <Link key={d.id} href={d.path} passHref>
                <div
                  className="text-black text-lg font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={handleLinkClick}
                  target={d.newTab ? "_blank" : "_self"}
                  rel={d.newTab ? "noopener noreferrer" : ""}
                >
                  {d.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
