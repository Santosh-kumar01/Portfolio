"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SparklesText from "../ui/sparkles-text";
import { ExternalLink } from "lucide-react";

// Animation variants for each timeline step
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Project = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Convert scroll progress to height percentage for line fill
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: false });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: false });
  const [ref4, inView4] = useInView({ threshold: 0.3, triggerOnce: false });

  const projects = [
    {
      ref: ref1,
      inView: inView1,
      step: "1",
      title: "Chess App",
      subtitle: "Real-Time Chess Game",
      description:
        "Chess-app is a real-time multiplayer web application that brings the classic strategy game of chess to your browser. It is designed for two players to play live, taking alternating turns, with full enforcement of official chess rules and game conditions.",
      icon: "♟️",
      alignment: "left",
      website: "https://chess-app-94eh.onrender.com",
    },
    {
      ref: ref2,
      inView: inView2,
      step: "2",
      title: "Cloud IDE Platform",
      subtitle:
        "Real-Time Exchange Rate Updates A modern cloud-based Integrated Development Environment",
      description:
        "A modern cloud-based Integrated Development Environment (IDE) featuring per-project Docker container isolation, real-time code editing, file management, integrated terminal access, and dynamic public URLs — built for scalability, security, and seamless developer experience.",
      icon: "👨🏻‍💻",
      alignment: "right",
      
      website: "https://github.com/Santosh-kumar01/CB-IDE",
    },
    {
      ref: ref3,
      inView: inView3,
      step: "3",
      title: " Currency Convertor",
      subtitle: "Real-Time Exchange Rate Updates",
      escription:
        "A Currency Converter is a web or mobile app that converts one currency to another using real-time exchange rates. It supports multiple currencies, provides historical data, and simplifies conversions with a user-friendly interface. Advanced features may include charts, fee calculations, and rate alerts.",

      description:
        "A modern cloud-based Integrated Development Environment (IDE) featuring per-project Docker container isolation, real-time code editing, file management, integrated terminal access, and dynamic public URLs — built for scalability, security, and seamless developer experience.",
      icon: "💸",
      alignment: "left",
      website: "https://currency-project-hazel.vercel.app",
    },
    {
      ref: ref4,
      inView: inView4,
      step: "4",
      title: "AI-Powered Multichannel Sentiment Monitoring ",
      subtitle: "Real-Time Issue Detection for Events",
      description:
        "Event Sentinel is a real-time, AI-driven event monitoring platform that empowers organizers to detect attendee issues, sentiment shifts, and crowd dynamics before they escalate and Designed with the complexities of large-scale offline events in mind, it centralizes live feedback, analyzes emotions across multiple platforms, and provides actionable insights — ensuring every concern is seen, heard, and resolved.",
      icon: "📊",
      alignment: "right",
      website: "https://github.com/Santosh-kumar01/404-not-found-hackfest-2025",
    },
  ];

  return (
    <section id="project" className="py-24 bg-violet-50" data-scroll-section >   
      <div className="container mx-auto px-4" ref={timelineRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-serif py-8">
            <SparklesText text="Project" />
          </div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Explore my projects that showcase my skills and creativity. Each project is a testament to my dedication to delivering high-quality work and my passion for technology.
            <br />
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block -translate-x-1/2 bg-blue-600/30">
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue-600 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          {projects.map((item, index) => (
            <motion.div
              key={index}
              ref={item.ref}
              className="timeline-item mb-16 md:mb-24 relative"
              initial="hidden"
              animate={item.inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full z-10 flex items-center justify-center border-4 border-white hidden md:flex">
                  <span className="text-white font-bold text-sm">
                    {item.step}
                  </span>
                </div>

                {/* Content alignment */}
                {item.alignment === "left" ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                      <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200 shadow-lg transition-transform duration-300 hover:-translate-y-2 mx-auto max-w-sm">
                        {/* Icon, Title, Subtitle (Centered) */}
                        <div className="text-center mb-4">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold font-serif text-neutral-700">
                            {item.subtitle}
                          </p>
                        </div>
                        {/* Description (Left-aligned) */}
                        <p className="text-neutral-600 font-serif text-left mb-4">
                          {item.description}
                        </p>
                        {/* Website Link (Bottom-right) */}
                        <div className="flex justify-end">
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center font-serif text-blue-600 hover:text-blue-800 transition-colors "
                          >
                            Visit App
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200 shadow-lg transition-transform duration-300 hover:-translate-y-2 mx-auto max-w-sm">
                        {/* Icon, Title, Subtitle (Centered) */}
                        <div className="text-center mb-4">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold font-serif text-neutral-700">
                            {item.subtitle}
                          </p>
                        </div>
                        {/* Description (Left-aligned) */}
                        <p className="text-neutral-600 font-serif text-left mb-4">
                          {item.description}
                        </p>
                        {/* Website Link (Bottom-right) */}
                        <div className="flex justify-end">
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center font-serif text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            (Working)Github Link
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
