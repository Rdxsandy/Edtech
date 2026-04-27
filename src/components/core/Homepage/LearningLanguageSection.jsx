import React, { memo } from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../Homepage/Button";

const LearningLanguageSection = memo(() => {
  return (
    <div className="mt-16 lg:mt-[130px] mb-16 lg:mb-32 px-4">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl font-semibold lg:text-4xl">
            Your Swiss Knife For
            <HighlightText text={"Learning Any Language"} />
          </div>
          <p className="mx-auto text-sm sm:text-base text-center text-richblack-600 w-full sm:w-[80%] lg:w-[70%] mt-3">
            Using StudyNotion makes learning a language easy with 20+ languages,
            record tracking, voiceover, and many other features.
          </p>
        </div>

        {/* Images — stack on mobile, overlap on desktop */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-0 sm:flex-row mt-5">
          <img
            src={know_your_progress}
            alt="Know your progress"
            className="w-[80%] sm:w-auto object-contain sm:-mr-32"
            loading="lazy"
          />
          <img
            src={compare_with_others}
            alt="Compare with others"
            className="w-[80%] sm:w-auto object-contain"
            loading="lazy"
          />
          <img
            src={plan_your_lesson}
            alt="Plan your lessons"
            className="w-[80%] sm:w-auto object-contain sm:-ml-44"
            loading="lazy"
          />
        </div>

        <div className="w-fit mt-2">
          <CTAButton active={true} linkto={"/login"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
});

LearningLanguageSection.displayName = "LearningLanguageSection";
export default LearningLanguageSection;
