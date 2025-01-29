import React from "react";

import SparklesText from "../ui/sparkles-text";
import Image from "next/image";
import NumberTicker from "../ui/number-ticker";

const About = () => {
  return (
    <div className=" py-11 ">
      <div className=" w-full text-center py-16 font-serif">
        <SparklesText text="About me" />
      </div>

        <div className=" flex items-center justify-evenly ">
          <div>
            <Image
              src="/Mr.Santosh.jpeg"
              alt="santosh"
              width={100}
              height={100}
              className=" w-full h-[30rem] mb-[16rem]"
            />
          </div>
          <div className=" flex h-[50rem] w-[50rem] flex-col justify-center ">
          <div className=" mb-[16rem]">
            <h1 className="font-semibold font-serif text-3xl text-purple-800 py-4">
              I'm Mr. Santosh
            </h1>
            <div className=" text-xl space-y-6">
              <h1 className="text-2xl font-serif">
                <span>A </span>
                <span className=" font-semibold font-serif  text-purple-700">
                  {" "}
                  Software Developer{" "}
                </span>{" "}
                Specially{" "}
                <span className="font-semibold font-serif  text-purple-700">
                  Application Software Developer
                </span>
              </h1>

              <p className=" font-extralight text-purple-900 font-serif">
                I'm a Skilled Software Developer Specially for Application
                Software Developer.My passion lies in Software developers
                design, create, and maintain software for applications and
                systems. Software developers create software to meet user needs
                by employing diagrams and models, writing code, and ensuring
                overall functionality. These professionals design, build, and
                implement computer programs and applications.Applications
                software developers focus on applications used on mobile devices
                and computer desktops.
              </p>
              <br />
              <hr />
              <div className="flex justify-around gap-3 font-semibold ">
                <div className="flex items-center gap-2">
                  
                  <p className="whitespace-pre-wrap text-3xl font-bold text-purple-900 ">
                    <NumberTicker value={265} />
                  </p>

                  <h1>Problems-Solved On LeetCode</h1>
                </div>
                <div className="flex items-center gap-2">
                  <p className="whitespace-pre-wrap text-3xl font-bold text-purple-900 ">
                    <NumberTicker value={1156} />
                  </p>
                  <h1>Connection On Linkedin</h1>
                </div>
                <div className="flex items-center gap-2">
                  <p className="whitespace-pre-wrap text-3xl font-bold text-purple-900 ">
                    <NumberTicker value={2} />
                  </p>
                  <h1>Success Projects</h1>
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
        </div>
        </div>
      </div>

  );
};

export default About;
