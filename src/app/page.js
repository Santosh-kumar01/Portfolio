"use client";
import dynamic from "next/dynamic";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Home from "@/components/Home/Home";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonial from "@/components/Testimonial/Testimonial";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";
import React, { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Dynamically import LocomotiveScroll only in the browser
const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

const Page = () => {
  const scrollContainerRef = useRef(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && scrollContainerRef.current) {
      import("locomotive-scroll").then((module) => {
        const LocomotiveScrollInstance = new module.default({
          el: scrollContainerRef.current,
          smooth: true,
        });

        setLocomotiveScroll(LocomotiveScrollInstance);
      });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className="w-full bg-violet-50">
      <Home />
      <About />
      <Skills />
      <Testimonial />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;