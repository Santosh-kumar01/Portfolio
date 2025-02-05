import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";

import Home from "@/components/Home/Home";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Testimonial/Testimonial";

import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";

import React from "react";

import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <div className=" bg-violet-50">
        <Home />
        <About />

        <Skills />
        <Services />
        <Portfolio />

        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default page;
