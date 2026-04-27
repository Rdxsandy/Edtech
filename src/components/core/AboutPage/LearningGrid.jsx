import React, { memo } from "react";
import HighlightText from "../../../components/core/Homepage/HighlightText";
import CTAButton from "../../../components/core/Homepage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable learning.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring you recognized certifications.",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring automated grading.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to make you job-ready.",
  },
];

const LearningGrid = memo(() => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-12 gap-0">
      {LearningGridArray.map((card, i) => (
        <div
          key={i}
          className={`${i === 0 ? "xl:col-span-2" : ""} ${
            card.order % 2 === 1
              ? "bg-richblack-700"
              : card.order % 2 === 0
              ? "bg-richblack-800"
              : "bg-transparent"
          } ${card.order === 3 ? "xl:col-start-2" : ""}`}
        >
          {card.order < 0 ? (
            <div className="flex flex-col gap-3 p-6 xl:p-8 xl:w-[90%]">
              <div className="text-3xl lg:text-4xl font-semibold text-white">
                {card.heading}
                <HighlightText text={card.highlightText} />
              </div>
              <p className="font-medium text-richblack-300 text-sm sm:text-base">
                {card.description}
              </p>
              <div className="mt-2 w-fit">
                <CTAButton active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </CTAButton>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 min-h-[200px] xl:h-[294px]">
              <h1 className="text-base sm:text-lg text-richblack-5 font-semibold">
                {card.heading}
              </h1>
              <p className="font-medium text-richblack-300 text-sm sm:text-base">
                {card.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

LearningGrid.displayName = "LearningGrid";
export default LearningGrid;