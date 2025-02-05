"use client";
import React from "react";
import AnimatedListDemo from "../ui/AnimatedListDemo";
import { IconCloud } from "../ui/icon-cloud";
import SparklesText from "../ui/sparkles-text";
import { Card } from "@/components/ui/card";

const slugs = [
  "typescript", "javascript", "react", "android", "html5", "css3", "nodedotjs", "express",
  "nextdotjs", "amazonwebservices", "postgresql", "firebase", "nginx", "docker", "git", "github",
  "gitlab", "androidstudio", "figma", "linux", "jet", "elastic", "serverless", "redux",
  "socket.io", "awslambda",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

const notifications = [
  { name: "TRI-O-CODE", description: "Haldia Institute Of Technology", time: "2023", icon: "🧑‍💻", color: "#FF3D71" },
  { name: "Digital Skills", description: "Artificial Intelligence", time: "2024", icon: "👨🏻‍💻", color: "#F71C36" },
  { name: "UCI Division of Continuing Education", description: "Udemy", time: "2023", icon: "📚", color: "#F4F417" },
  { name: "HacktoberFest", description: "Haldia Institute Of Technology", time: "2022", icon: "🎃", color: "#00C9A7" },
  { name: "Quiz Competition", description: "Haldia Institute Of Technology", time: "2022", icon: "🏆", color: "#FFB800" },
  { name: "Flipkart GRiD 6.0", description: "Software Development Track", time: "2024", icon: "🏆", color: "#EC24CD" },
  { name: "Google Cloud Arcade", description: "Google Cloud", time: "2023 & 2024", icon: "👨🏻‍💻", color: "#1E86FF" },
];

const educationList = [
  { name: "Bachelor of Technology", description: "Haldia Institute of Technology - Computer Science & Engineering with Specialization in Data Science.", time: "2022-2026", icon: "🎓", color: "#4CAF50" },
  { name: "Intermediate", description: "Saraswati Vidya Mandir, Sinidih, Dhanbad, Jharkhand, is affiliated with the Central Board of Secondary Education (CBSE).", time: "2017-2019", icon: "🏫", color: "#2196F3" },
  { name: "Matriculation", description: "Saraswati Vidya Mandir, Sinidih, Dhanbad, Jharkhand, is affiliated with the Central Board of Secondary Education (CBSE).", time: "2019-2020", icon: "🏫", color: "#2196F8" },
];

const Skills = () => {
  return (
    <div className="w-full contain mt-[-1rem]" id="skills">
      <div className="font-serif text-center py-[7rem]">
        <SparklesText text="Skills" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <h1 className="text-4xl font-bold font-serif text-purple-900 text-center">
            Education
          </h1>
          <AnimatedListDemo
            className="bg-sky-50 border-violet-800"
            notifications={educationList}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold font-serif text-purple-900 text-center">
            Skills
          </h1>
          <Card className="h-[35rem] flex justify-center items-center bg-sky-50 border-violet-800">
            <IconCloud images={images} />
          </Card>
        </div>
        <div>
          <h1 className="text-4xl font-bold font-serif text-purple-900 text-center">
            Awards
          </h1>
          <AnimatedListDemo
            className="bg-sky-50 border-violet-800"
            notifications={notifications}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
