"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { AuroraText } from "../ui/aurora-text";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "testimonial", text: "Testimonial" }, // Fixed lowercase ID
    { id: "portfolio", text: "Portfolio" },
    { id: "contact", text: "Contact" },
  ];

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenu(false);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Detect Active Section on Scroll
  useEffect(() => {
    const handleScroll = () => {
      let foundSection = "home";
      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundSection = id;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="shadow-md left-0 right-0 top-0 z-50 bg-violet-50 font-serif fixed w-full">
      <div className="contain mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex gap-2">
            <Image
              src="/santosh-Portfolio.jpeg"
              alt="santosh"
              width={100}
              height={100}
              className="h-[3rem] w-[2.8rem] rounded-full"
            />
            <div>
              <h1>
                <span>ຮaͥή</span>
                <span className="text-violet-700 text-xl">tͣoͫຮђ</span>

                <div className="text-xl font-serif tracking-tighter md:text-xl lg:text-xl">
                  <AuroraText>Software Development</AuroraText>
                </div>
              </h1>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <div
                key={id}
                className={`cursor-pointer hover:underline hover:text-violet-800 hover:scale-125 duration-1000 ${
                  activeSection === id ? "text-purple-800 font-bold" : ""
                }`}
                onClick={() => handleClick(id)}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="md:hidden fixed inset-0 bg-violet-200 flex flex-col items-center justify-center space-y-4 z-50">
          <ul className="text-xl font-semibold">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className={`cursor-pointer hover:underline hover:scale-105 duration-200 ${
                  activeSection === id ? "text-purple-800 font-bold" : ""
                }`}
                onClick={() => handleClick(id)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
