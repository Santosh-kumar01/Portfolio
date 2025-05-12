"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Home from "@/components/Home/Home";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonial from "@/components/Testimonial/Testimonial";
import Project from "@/components/Work/Project";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";
import React, { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Page = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div ref={scrollContainerRef} className="w-full bg-violet-50">
      <Home />
      <About />
      <Skills />
      <Testimonial />
      <Project />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
