import React, { memo } from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = memo(({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;
  return (
    <div
      className={`w-full sm:w-[300px] lg:w-[30%] ${
        isActive
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      } text-richblack-25 min-h-[260px] box-border cursor-pointer rounded-sm transition-all duration-200`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={`${
            isActive && "text-richblack-800"
          } font-semibold text-[18px] lg:text-[20px]`}
        >
          {cardData?.heading}
        </div>
        <div className="text-richblack-400 text-sm">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          isActive ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium text-sm`}
      >
        <div className="flex items-center gap-2">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>
        <div className="flex items-center gap-2">
          <ImTree />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
});

CourseCard.displayName = "CourseCard";
export default CourseCard;
