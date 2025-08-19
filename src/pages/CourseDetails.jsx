import React, { useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import ConfirmationModal from "../components/common/ConfirmationModal";
import Footer from "../components/common/Footer";
import RatingStars from "../components/common/RatingStars";
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";

import { formatDate } from "../services/formatDate";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import { BuyCourse } from "../services/operations/studentFeaturesAPI";
import GetAvgRating from "../utils/avgRating";
import Error from "./Error";

function CourseDetails() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Course ID from params
  const { courseId } = useParams();

  // Response state
  const [response, setResponse] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  // Fetch course details
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCourseDetails(courseId);
        setResponse(res);
      } catch (error) {
        console.error("Could not fetch Course Details", error);
      }
    })();
  }, [courseId]);

  // Average review count
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    if (response?.data?.courseDetails?.ratingAndReviews) {
      const count = GetAvgRating(response.data.courseDetails.ratingAndReviews);
      setAvgReviewCount(count);
    }
  }, [response]);

  // Accordion state
  const [isActive, setIsActive] = useState([]);
  const handleActive = (id) => {
    setIsActive((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  // Total lectures count
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    const sections = response?.data?.courseDetails?.courseContent || [];
    let lectures = 0;
    sections.forEach((sec) => {
      lectures += sec.subSection?.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [response]);

  // Loading UI
  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  // Error state
  if (response && !response.success) {
    return <Error />;
  }

  const course = response?.data?.courseDetails || {};

  const handleBuyCourse = () => {
    if (token) {
      BuyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (paymentLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
        <p className="mt-4 text-white">Processing payment...</p>
      </div>
    );
  }

  const instructorName = `${course?.instructor?.firstName || ""} ${
    course?.instructor?.lastName || ""
  }`;
  const imageUrl =
    course?.instructor?.image ||
    `https://api.dicebear.com/5.x/initials/svg?seed=${instructorName}`;

  return (
    <>
      <div className="relative w-full bg-richblack-800">
        {/* Header Section */}
        <div className="mx-auto box-content px-4 lg:w-[1260px]">
          <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            {/* Thumbnail for mobile */}
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={course.thumbnail}
                alt="course thumbnail"
                className="w-full aspect-auto"
              />
            </div>

            {/* Course Info */}
            <div className="z-30 flex flex-col justify-center gap-4 py-5 my-5 text-lg text-richblack-5">
              <p className="text-4xl font-bold sm:text-[42px]">
                {course.courseName}
              </p>
              <p className="text-richblack-200">{course.courseDescription}</p>

              {/* Ratings */}
              <div className="flex flex-wrap items-center gap-2 text-md">
                <span className="text-yellow-25">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${
                  course.ratingAndReviews?.length || 0
                } reviews)`}</span>
                <span>{`${
                  course.studentsEnrolled?.length || 0
                } students enrolled`}</span>
              </div>

              <p>Created By {instructorName}</p>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  <BiInfoCircle /> Created at {formatDate(course.createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>

            {/* Purchase options for mobile */}
            <div className="flex flex-col w-full gap-4 py-4 border-y border-y-richblack-500 lg:hidden">
              <p className="pb-4 text-3xl font-semibold text-richblack-5">
                Rs. {course.price}
              </p>
              <button className="yellowButton" onClick={handleBuyCourse}>
                Buy Now
              </button>
              <button className="blackButton">Add to Cart</button>
            </div>
          </div>

          {/* Course card for desktop */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute lg:block">
            <CourseDetailsCard
              course={course}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
      </div>

      {/* What you'll learn */}
      <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          <div className="p-8 my-8 border border-richblack-600">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-5">
              <ReactMarkdown>{course.whatYouWillLearn}</ReactMarkdown>
            </div>
          </div>

          {/* Course content */}
          <div className="max-w-[830px]">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2">
                  <span>{course.courseContent?.length || 0} section(s)</span>
                  <span>{totalNoOfLectures} lecture(s)</span>
                  <span>{response?.data?.totalDuration} total length</span>
                </div>
                <button
                  className="text-yellow-25"
                  onClick={() => setIsActive([])}
                >
                  Collapse all sections
                </button>
              </div>
            </div>

            <div className="py-4">
              {course.courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author */}
            <div className="py-4 mb-12">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  src={imageUrl}
                  alt="Author"
                  className="object-cover rounded-full h-14 w-14"
                />
                <p className="text-lg">{instructorName}</p>
              </div>
              <p className="text-richblack-50">
                {course.instructor?.additionalDetails?.about ||
                  "No bio available."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}

export default CourseDetails;
