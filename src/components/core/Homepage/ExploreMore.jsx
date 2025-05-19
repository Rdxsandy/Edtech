import React, { useState } from "react";
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

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    if (result.length > 0) {
      setCourses(result[0].courses);
      setCurrentCard(result[0].courses[0].heading);
    }
  };

  return (
    <div className="mt-10">
      <div className="text-4xl font-semibold text-center text-white">
        Unlock the <HighlightText text="Power of code" />
      </div>

      <p className="mt-3 text-center text-richblack-300">
        Learn to build anything you can imagine
      </p>

      <div className="flex flex-row mx-auto mt-5 rounded-full w-[90%] md:w-[50%] bg-richblack-800 mb-5 px-1 py-1">
        {tabsName.map((element, index) => (
          <div
            key={index}
            className={`text-[16px] flex flex-row items-center justify-center gap-2 ${
              currentTab === element
                ? "text-richblack-5 bg-richblack-900 font-medium"
                : "text-richblack-200"
            } transition-all rounded-full duration-300 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-4 md:px-7 py-2`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="lg:h-[150px]"></div>

      <div className="flex flex-wrap justify-center w-full gap-10 px-4 lg:justify-between mt-7 lg:mt-0 lg:px-0">
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
};

export default ExploreMore;
