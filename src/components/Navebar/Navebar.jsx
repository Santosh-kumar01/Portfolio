"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "services", text: "Services" },
    { id: "portfolio", text: "Portfolio" },
    { id: "contact", text: "Contact" },
  ];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Set the clicked section as active
      setMenu(false); // Close menu on mobile after clicking
    }
  };

  return (
    <div className="shadow-md left-0 right-0 top-0 z-50 bg-violet-50 font-serif ">
      <div className="contain mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex gap-2">
            <Image
              src="/picss.jpeg"
              alt="santosh"
              width={100}
              height={100}
              className="h-12 w-10 rounded-full"
            />
            <div>
              <h1>
                <span>ຮaͥή</span>
                <span className="text-red-400 text-xl">tͣoͫຮђ</span>
                <p className="text-sm">Software Development</p>
              </h1>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className={`cursor-pointer hover:underline hover:scale-105 duration-200 ${
                    activeSection === id ? "text-purple-800 font-bold" : ""
                  }`}
                  onClick={() => handleScroll(id)}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div>
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 font-bold text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className={`cursor-pointer hover:underline hover:scale-105 duration-200 font-semibold ${
                    activeSection === id ? "text-purple-800" : ""
                  }`}
                  onClick={() => handleScroll(id)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;