import React, { useRef, useEffect } from "react";
import Xarrow from "react-xarrows";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineimage from "../../../assets/Images/TimelineImage.png";

const Timeline = [
  {
    Logo: logo1,
    heading: "Leadership",
    Description: "fully committed to the success company",
  },
  {
    Logo: logo2,
    heading: "Leadership",
    Description: "fully committed to the success company",
  },
  {
    Logo: logo3,
    heading: "Leadership",
    Description: "fully committed to the success company",
  },
  {
    Logo: logo4,
    heading: "Leadership",
    Description: "fully committed to the success company",
  },
];

const TimelineSection = () => {
  const logoRefs = useRef([]);

  useEffect(() => {
    console.log(logoRefs.current);
  }, []);

  return (
    <div className="w-full lg:w-[65%]">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-32">
        {/* section 1 */}
        <div className="flex flex-col w-full lg:w-[45%] gap-5">
          {Timeline.map((element, index) => (
            <div className="flex flex-row gap-5" key={index}>
              <div
                className="w-[50px] h-[50px] items-center bg-white flex flex-row justify-center"
                ref={(el) => (logoRefs.current[index] = el)}
              >
                <img src={element.Logo} alt={`Logo ${index + 1}`} />
              </div>
              <div>
                <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                <p className="text-base">{element.Description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* section 2 */}
        <div className="relative w-full shadow-richblack-600 lg:w-auto">
          <img src={timelineimage} alt="Timeline" className="w-full" />

          {/* Dotted lines pending */}

          <div
            className="absolute flex flex-col sm:flex-row py-4 sm:py-10 text-white uppercase bg-caribbeangreen-700 left-[50%]
            translate-x-[-50%] translate-y-[-50%] pb-0"
          >
            <div className="flex flex-row items-center gap-2 border-r border-caribbeangreen-300 translate-y-[-50%] px-2 sm:px-4">
              <p className="text-2xl font-bold sm:text-3xl">10 </p>
              <p className="text-sm border-caribbeangreen-500 text-caribbeangreen-300">
                year of experience
              </p>
            </div>

            <div className="flex flex-row items-center gap-2 px-2 sm:px-4">
              <p className="text-2xl font-bold sm:text-3xl">250 </p>
              <p className="text-sm border-caribbeangreen-500 text-caribbeangreen-300">
                types of courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
