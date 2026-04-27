import React, { memo } from "react";
import Instructer from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";

const InstructureSection = memo(() => {
  return (
    <div className="mt-16 px-4">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <div className="w-full lg:w-[50%]">
          <img
            src={Instructer}
            alt="Instructor"
            className="rounded-lg shadow-white w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-[50%] text-center lg:text-left items-center lg:items-start">
          <div className="text-3xl font-semibold lg:text-4xl">
            Become an
            <HighlightText text={"Instructor"} />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-richblue-300 w-full sm:w-[80%] lg:w-[80%]">
            Instructors from around the world teach millions of people on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row items-center gap-2">
                Start Learning Today
                <FaLongArrowAltRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
});

InstructureSection.displayName = "InstructureSection";
export default InstructureSection;
