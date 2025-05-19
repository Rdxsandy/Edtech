import React from "react";
import HighlightText from "./HighlightText";
import know_your_proress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../Homepage/Button";

const LearningLanguageSection = () => {
  return (
    <div className="mt-20 lg:mt-[130px] mb-20 lg:mb-32">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-semibold text-center lg:text-4xl">
            Your Swiss Knife For
            <HighlightText text={"Learing Any Language"} />
          </div>
          <div className="mx-auto text-base text-center text-richblack-600 w-[90%] lg:w-[70%]">
            Using StudyNotion makes learning a language easy with 20+ languages,
            record tracking, voiceover, and many other features.
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 md:flex-row">
          <img
            src={know_your_proress}
            alt="know your progress"
            className="object-contain mb-4 -mr-0 md:-mr-32 md:mb-0"
          />
          <img
            src={compare_with_others}
            alt="compare with others"
            className="object-contain"
          />
          <img
            src={plan_your_lesson}
            alt="plan your lesson"
            className="object-contain mt-4 -ml-0 md:-ml-44 md:mt-0"
          />
        </div>

        <div className="w-fit">
          <CTAButton active={true} linkto={"/login"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
