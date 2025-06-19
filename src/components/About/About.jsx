import React from "react";
import SparklesText from "../ui/sparkles-text";
import Image from "next/image";
import NumberTicker from "../ui/number-ticker";

const About = () => {
  return (
    <div className="py-28" id="about">
      <div className="w-full text-center py-16 font-serif">
        <SparklesText text="About me" />
      </div>

      {/* Main Container with Responsive Flex */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 transition-all duration-500">
        {/* Image Section */}
        <div className="lg:order-1 order-2">
          <Image
            src="https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750325435/WhatsApp_Image_2025-05-21_at_17.32.14_qcd5eh.jpg"
            alt="Santosh"
            width={100}
            height={100}
            className="w-full h-[30rem] rounded-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:order-2 order-1 flex flex-col justify-center max-w-2xl text-center lg:text-left">
          <h1 className="font-semibold font-serif text-4xl text-purple-800 py-4">
            I&apos;m Mr. Santosh
          </h1>
          <h2 className="text-2xl font-serif">
            A <span className="font-semibold text-purple-700">Software Developer</span> Specially
            <span className="font-semibold text-purple-700"> Application Software Developer</span>
          </h2>
          <p className=" font-extralight text-purple-900 font-serif mt-4 text-2xl">
            I'm a skilled Software Developer specializing in Application Software Development.
            My passion lies in designing, creating, and maintaining software for applications and systems.
            I focus on building applications that run on mobile devices and computer desktops.
          </p>

          {/* Number Ticker Section */}
          <br/>
          <hr/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center lg:justify-start text-center lg:text-left gap-6 font-semibold mt-6">
            <div className="flex flex-col md:flex-row items-center gap-2 text-xl">
              <p className="text-3xl font-bold text-purple-900">
                <NumberTicker value={265} />
              </p>
              <h1>Problems Solved on LeetCode</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 text-xl">
              <p className="text-3xl font-bold text-purple-900">
                <NumberTicker value={1156} />
              </p>
              <h1>Connections on LinkedIn</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 text-xl">
              <p className="text-3xl font-bold text-purple-900">
                <NumberTicker value={2} />
              </p>
              <h1>Successful Projects</h1>
            </div>
          </div>
          <br/>
          <hr/>
        </div>
      </div>
    </div>
  );
};

export default About;
