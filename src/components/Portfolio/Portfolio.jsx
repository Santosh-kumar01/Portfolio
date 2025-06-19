import React from "react";
import SparklesText from "../ui/sparkles-text";
import Image from "next/image";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { RainbowButton } from "../ui/rainbow-button";

const Portfolio = () => {
  return (
    <div className="w-full contain py-[6rem] flex flex-col items-center" id="portfolio">
      <div className="font-serif text-center py-[4rem]">
        <SparklesText text="Portfolio" />
      </div>
   

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] justify-center items-center">
        {[
          {
            src: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321615/web_developmengt_new_eixz6v.png",
            title: "Web Development",
            desc: "Web Development involves creating websites and web applications, focusing on Frontend (UI/UX), Backend (server-side), and Full Stack (both).",
          },
          {
            src: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321612/SOFTWARE_DEVLOPER_nrcjyi.jpg",
            title: "Software Development",
            desc: "Software Development is the process of designing, coding, testing, and maintaining applications or systems to meet user requirements.",
          },
          {
            src: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321612/system-development_zekj4o.jpg",
            title: "System Development",
            desc: "System Development involves designing and maintaining hardware and software solutions to ensure efficiency, scalability, and reliability.",
          },
          {
            src: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321605/dev-ops1_eb3zzr.jpg",
            title: "DevOps Development",
            desc: "DevOps Development integrates development and operations to improve quality, automate processes, and enhance deployment speed.",
          },
          {
            src: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321613/WEB_DESIGN_klmqbs.jpg",
            title: "Web Design Development",
            desc: "Web Design Development focuses on creating visually appealing, user-friendly, and responsive websites with modern UI/UX techniques.",
          },
          {
            src: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321605/js_zfqjms.jpg",
            title: "JavaScript Development",
            desc: "JavaScript Development involves building interactive web applications, server-side logic, and scalable solutions using JavaScript frameworks.",
          },
        ].map((item, index) => (
          <NeonGradientCard
            key={index}
            className="max-w-[22rem] max-h-[30rem] flex flex-col items-center text-center hover:scale-90 duration-200 mx-auto"
          >
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-[1.5rem] font-bold font-serif leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src={item.src}
                alt={item.title}
                width={100}
                height={100}
                className="w-[6rem] h-[6rem] rounded-full mb-[1rem] ml-[7rem]"
              />
              {item.title}
            </span>
            <div>
              <p className="text-[0.968rem]">{item.desc}</p>
              <div className="mt-[1rem]">
                <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
