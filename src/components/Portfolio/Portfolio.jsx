import React from "react";
import SparklesText from "../ui/sparkles-text";
import Image from "next/image";

import { NeonGradientCard } from "../ui/neon-gradient-card";
import { RainbowButton } from "../ui/rainbow-button";


const Portfolio = () => {
  return (
    <div className=" w-full contain py-44 ">
      <div className=" font-serif text-center py-16 ">
        <SparklesText text="Portfolio" />
      </div>
      <div>
        <div className="flex justify-around items-center gap-3">
          <NeonGradientCard className="max-w-[22rem]  max-h-[30rem] items-center justify-center text-center hover:scale-90 duration-200">
            <span className="pointer-events-none  z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src="/web developmengt new.png"
                alt="apple"
                width={100}
                height={100}
                className="md:w-[6rem] md:h-[6rem] rounded-full ml-[7rem]"
              />
              Web Development
            </span>
            <div>
              <div className=" text-[0.968rem]">
                Web Development involves creating websites and web applications,
                focusing on Frontend (UI/UX), Backend (server-side), and Full
                Stack (both).
              </div>
              <div>
              <br />
              <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="max-w-[22rem] max-h-[30rem] items-center justify-center text-center hover:scale-90 duration-200">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src="/SOFTWARE DEVLOPER.jpg"
                alt="apple"
                width={100}
                height={100}
                className="md:w-[6rem] md:h-[6rem] rounded-full ml-[7rem]"
              />
              Software Development
            </span>
            <div>
            <div className=" text-[0.75rem]">
                Software Development is the process of designing, coding,
                testing, and maintaining applications or systems to meet user
                requirements, improve efficiency, ensure functionality, and
                address evolving needs using programming languages and tools.
              </div>
              <div>
              <br />
              <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="max-w-[22rem] max-h-[30rem] items-center justify-center text-center hover:scale-90 duration-200">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src="/system-development.jpg"
                alt="apple"
                width={100}
                height={100}
                className="md:w-[6rem] md:h-[6rem] rounded-full ml-[7rem]"
              />
              System Development
            </span>
            <div>
            <div className=" text-[0.75rem]">
                System Development is the process of designing, implementing,
                and maintaining integrated hardware and software solutions to
                meet organizational goals, streamline processes, and ensure
                system efficiency, scalability, and reliability.
              </div>
              <div>
              <br />
              <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
        </div>

        <div className=" flex justify-around items-center gap-3 mt-[5rem]">
          <NeonGradientCard className="max-w-[22rem] max-h-[30rem] items-center justify-center text-center hover:scale-90 duration-200">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src="/dev-ops1.jpg"
                alt="apple"
                width={100}
                height={100}
                className="md:w-[6rem] md:h-[6rem] rounded-full ml-[7rem]"
              />
              DevOps Development
            </span>
            <div>
            <div className=" text-[0.75rem]">
                DevOps Development integrates development and operations,
                emphasizing collaboration, automation, continuous integration,
                delivery, and monitoring to streamline software development,
                improve quality, enhance deployment speed, and ensure reliable,
                scalable system performance.
              </div>
              <div>
              <br />
              <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="max-w-[22rem] max-h-[30rem] items-center justify-center text-center hover:scale-90 duration-200">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src="/WEB DESIGN.jpg"
                alt="apple"
                width={100}
                height={100}
                className="md:w-[6rem] md:h-[6rem] rounded-full ml-[7rem]"
              />
              Web Design Development
            </span>
            <div>
            <div className=" text-[0.825rem]">
                Web Design Development focuses on creating visually appealing,
                user-friendly, and responsive websites by combining UI/UX
                design, coding (HTML, CSS, JavaScript), and tools to deliver
                engaging online experiences.
              </div>
              <div>
              <br />
              <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="max-w-[22rem] max-h-[30rem] items-center justify-center text-center hover:scale-90 duration-200">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <Image
                src="/js.jpg"
                alt="apple"
                width={100}
                height={100}
                className="md:w-[6rem] md:h-[6rem] rounded-full ml-[7rem]"
              />
              JavaScript Development
            </span>
            <div>
            <div className=" text-[0.75rem]">
                JavaScript Development involves building dynamic web
                applications, interactive interfaces, server-side logic, and
                mobile or desktop apps using JavaScript frameworks, libraries,
                and tools to create responsive, efficient, and scalable
                solutions.
              </div>
              <div>
              <br />
              <RainbowButton>Learn More</RainbowButton>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
