import React from 'react';
import SparklesText from '../ui/sparkles-text';
import { cn } from "@/lib/utils";
import Marquee from '../ui/marquee';
import { color } from 'framer-motion';


// Reviews Data
const reviews = [
  {
    name: "Frontend Developer", 
    username: "what is Frontend Developer?",
    body: "Focuses on the client side, designing user interfaces and ensuring a seamless user experience.Technologies: HTML, CSS, JavaScript, React, Angular, Vue.js..",
    img: "code.png",
    
  },
  
  {
    name: "Backend Developer",
    username: "what is Backend Developer?",
    body:"Handles server-side logic, databases, and APIs.Technologies: Node.js, Python, Ruby, PHP, Java, .NET, Go.",
  
    img: "web-design.png", 
  
  },
  {
    name: "Full Stack Developer",
    username: "what is Full Stack Developer?",
    body:"Combines frontend and backend skills to build complete web applications, handling both client-side and server-side development.",
    img: "full-stack.png",
  },
  {
    name: "Web Developer",
    username: "what is Web Developer?",
    body: "Builds and maintains websites, focusing on both design and functionality, depending on specialization.",
    img: "web-developer.png",
  },
  {
    name: "Apple/Mobile Developer",
    username: "what is Mobile Developer?",
    body: "iOS Developer:-Builds apps for Apple devices using Swift and Objective-C,Android Developer:-Develops Android apps with Java and Kotlin and Cross-Platform Developer:-Creates apps using Flutter, React Native, and Xamarin.",
    img: "apple.png",
  },
  {
    name: "App Developer",
    username: "what is App Developer?",
    body: "An App Developer designs, develops, and maintains mobile or web applications for various platforms. They use programming languages and frameworks like Swift, Kotlin, Java, and React Native to build functional apps.",
    img: "app-development.png",
  },
  {
    name: "Database Developer",
    username: "what is Database Developer?",
    body: "Designs and optimizes databases to ensure efficient data storage and retrieval, using SQL or NoSQL systems.",
    img: "database.png",
  },
  {
    name: "System Developer",
    username: "what is System Developer?",
    body: "Embedded Systems Developer Works on hardware-level programming.Technologies:-C, C++, Assembly. andOperating Systems Developer Develops or maintains operating systems. Technologies: Linux, Windows Kernel.",
    img: "system.png",
  },
  {
    name: "Cloud Developer",
    username: "what is Cloud Developer?",
    body: "Develops and manages applications on cloud platforms like AWS or Azure, ensuring scalability and reliability.",
    img: "cloud-computing.png",
  },
  {
    name: "DevOps Engineer",
    username: "what is DevOps Engineer?",
    body: "Automates deployment and ensures smooth operations using tools like Docker, Kubernetes, and CI/CD pipelines.",
    img: "devops.png",
   
  },
 
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// ReviewCard Component
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// MarqueeDemo Component
export function MarqueeDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

// Portfolio Component
const Services = () => {
  return (
    <div className=" w-full contain  mt-28  ">
      <div className=" font-serif text-center py-10 ">
        <SparklesText text="Services" />
      </div>
      <MarqueeDemo />
    </div>
  );
};

export default Services;
