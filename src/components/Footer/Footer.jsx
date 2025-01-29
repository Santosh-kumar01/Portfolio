"use client";
import React from "react";
import { BorderBeam } from "../ui/border-beam";
import { Dock, DockIcon } from "../ui/dock";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io5";
import Link from "next/link";




const socialLinks = [
  { href: "https://github.com/Santosh-kumar01", icon: <FaGithub className="size-7 text-black" /> },
  { href: "https://www.linkedin.com", icon: <FaLinkedin className="size-7 text-black" /> },
  { href: "https://www.instagram.com/invites/contact/?igsh=1hzwybqxo1lzq&utm_content=l1q4shc", icon: <BsInstagram className="size-7 text-black" /> },
  { href: "https://www.facebook.com", icon: <IoLogoFacebook className="size-7 text-black" /> },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[3rem]">
      <div className="relative py-3 px-[1rem] border rounded bg-indigo-50">
        <h1 className="text-[2.25rem] font-serif text-purple-900">
        Let&apos;s collaborate on a real-world project and connect now!
        </h1>
        <h2 className="font-serif ml-[6rem] text-purple-900">
          Let&apos;s work together to craft a unique and meaningful project that stands out and brings real-world benefits.
        </h2>
        <div className="relative flex justify-center">
          <Dock iconMagnification={80} iconDistance={120}>
            {socialLinks.map((link, index) => (
              <DockIcon key={index} className="bg-black/10 dark:bg-white/10 p-2 rounded-full transition-transform duration-200 hover:scale-25">
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </Link>
              </DockIcon>
            ))}
          </Dock>
        </div>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
      <div className="bg-violet-50">
        <p className="font-serif mt-3">
          Developed by <span className="font-bold">Mr. Santosh Kumar</span> 🖤 &copy;2024
        </p>
      </div>
    </div>
  );
};

export default Footer;