import React from "react";
import CTAButton from "./Button";
import HighlightText from "./HighlightText";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${position} my-20 w-[80%] mx-[10%] lg:mx-[20%] items-center gap-5 lg:gap-1`}
    >
      {/* section 1 */}
      <div className="w-full lg:w-[75%] flex flex-col gap-3 max-h-[80%]">
        {heading}

        <div className="font-bold text-richblack-300">{subheading}</div>

        <div className="flex gap-5 lg:gap-14 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex items-center gap-2">
              {ctabtn1.btntext}
              <FaLongArrowAltRight />
            </div>
          </CTAButton>
          {ctabtn2 && (
            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
              <div className="flex items-center gap-2">
                {ctabtn2.btntext}
                <FaLongArrowAltRight />
              </div>
            </CTAButton>
          )}
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-row h-fit w-full lg:w-[1000px] gap-2 px-5 lg:px-40">
        <div className="flex flex-col text-center w-[10%] text-richblack-400 font-inter font-bold">
          {[...Array(9)].map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>
        <div
          className={`flex flex-col w-[90%] gap-2 font-mono font-bold ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            repeat={Infinity}
            cursor={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
