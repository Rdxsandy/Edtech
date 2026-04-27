import React, { useState, useCallback, memo } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

const ExploreMore = memo(() => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = useCallback((value) => {
    setCurrentTab(value);
    const result = HomePageExplore.find((course) => course.tag === value);
    if (result) {
      setCourses(result.courses);
      setCurrentCard(result.courses[0].heading);
    }
  }, []);

  return (
    <div className="mt-10 px-4">
      <div className="text-3xl sm:text-4xl font-semibold text-center text-white">
        Unlock the <HighlightText text="Power of code" />
      </div>

      <p className="mt-3 text-center text-richblack-300 text-sm sm:text-base">
        Learn to build anything you can imagine
      </p>

      {/* Tab bar — scrollable on small screens */}
      <div className="flex flex-row mx-auto mt-5 rounded-full w-full sm:w-[80%] md:w-[60%] bg-richblack-800 mb-5 px-1 py-1 overflow-x-auto scrollbar-none">
        {tabsName.map((element, index) => (
          <div
            key={index}
            className={`text-[13px] sm:text-[15px] flex-shrink-0 flex flex-row items-center justify-center gap-2 ${
              currentTab === element
                ? "text-richblack-5 bg-richblack-900 font-medium"
                : "text-richblack-200"
            } transition-all rounded-full duration-300 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-3 sm:px-5 py-2`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center w-full gap-6 sm:gap-8 mt-7">
        {courses.map((element, index) => (
          <CourseCard
            key={index}
            cardData={element}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
});

ExploreMore.displayName = "ExploreMore";
export default ExploreMore;
