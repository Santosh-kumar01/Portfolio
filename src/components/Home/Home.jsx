"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedin, FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import { IoLogoGithub, IoLogoNodejs } from "react-icons/io5"; 
import { RiJavascriptFill, RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiSpringboot } from "react-icons/si";
import { ReactTyped } from "react-typed";
import Link from "next/link";
// IoLogoYoutube

import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "../ui/animated-subscribe-button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AuroraText } from "../ui/aurora-text";

const Home = () => {
  return (
    <TooltipProvider>
      <div
        className="contain grid grid-cols-1 md:grid-cols-2 gap-4 py-20 md:py-40 "
        id="home"
      >
        <div className="order-2 md:order-1">
          <h1 className="text-2xl font-bold font-serif tracking-tighter md:text-2xl lg:text-3xl">
           <AuroraText> Hello👋🏻, It's Me </AuroraText>
            
          </h1>
          <h3 className="text-2xl font-bold font-serif tracking-tighter md:text-3xl lg:text-5xl">
          Mr. <AuroraText>Santosh</AuroraText>
          </h3>
          {/* <h2 className="text-3xl font-serif">Mr. Santosh</h2> */}

          <div className="flex gap-2 text-2xl md:text-4xl font-serif">
            <h3>I'm a </h3>
            <ReactTyped
              className="text-purple-900 font-bold"
              strings={[
                "Front-end Developer.",
                "Back-end Developer.",
                "Full Stack Developer.",
                "Software Developer.",
                "Coder.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-xl text-purple-900 font-serif">
            I'm a skilled software developer specializing in application
            development. My passion lies in designing, creating, and maintaining
            software for applications and systems. I focus on building software
            solutions that meet user needs effectively.
          </p>
          <br />

          <div className="flex justify-between flex-col md:flex-row space-y-3">
            <div className="font-bold space-y-2 ">
              <h1>Available on</h1>
              <ul className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <a href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <a
                        href="https://github.com/Santosh-kumar01/"
                        target="_blank"
                      >
                        <IoLogoGithub className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
                {/* <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <a
                        href="http://www.youtube.com/@Santosh_Blog"
                        target="_blank"
                      >
                        <IoLogoYoutube className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>YouTube</p>
                  </TooltipContent>
                </Tooltip> */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <FaFacebook className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <a
                        href="https://www.instagram.com/invites/contact/?igsh=1hzwybqxo1lzq&utm_content=l1q4shc"
                        target="_blank"
                      >
                        <FaSquareInstagram className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </ul>
            </div>

            <div className="font-bold space-y-2 ">
              <h1>Current Working On</h1>
              <ul className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <RiJavascriptFill className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>JavaScript</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <RiReactjsLine className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React.js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <RiNextjsFill className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next.js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <IoLogoNodejs className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Node.js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <SiTailwindcss className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li>
                      <SiSpringboot className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Spring Boot</p>
                  </TooltipContent>
                </Tooltip>
              </ul>
            </div>
          </div>
          <br />
          <div className="hover:scale-105 duration-100">
            <AnimatedSubscribeButton
              buttonColor="#000000"
              buttonTextColor="#ffffff"
              subscribeStatus={false}
              initialText={
                <Link href="https://drive.google.com/file/d/1_ioEjJDLh_8NMZeDnVMXY8rR42AZaddb/view?usp=share_link">
                  <span className="group inline-flex items-center font-serif">
                    Download Resume{" "}
                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              }
              changeText={
                <span className="group inline-flex items-center font-serif">
                  <CheckIcon className="mr-2 size-4 font-serif" />
                  Download Resume{" "}
                </span>
              }
            />
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center">
          <Image
            src="/Mr.Santosh.jpeg"
            alt="santosh"
            width={100}
            height={100}
            className="md:h-[320px] md:w-[320px] rounded-full"
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Home;
