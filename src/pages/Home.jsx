import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import HighlightText from "../components/core/Homepage/HighlightText";
import CTAButton from "../components/core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/Homepage/CodeBlocks";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import TimelineSection from "../components/core/Homepage/TimelineSection";
import InstructureSection from "../components/core/Homepage/InstructureSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/Homepage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";
const Home = () => {
  return (
    <div>
      {/* section1 */}
      <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto text-white max-w-maxContent">
        <Link to="/signup">
          <div className="mx-auto font-bold transition-all duration-200 rounded-full group bg-richblack-800 text-richblack-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-1 px-3 mt-5 rounded-full py-10px group-hover:bg-richblack-900">
              <button>Become an Instructor</button>
              <FaLongArrowAltRight />
            </div>
          </div>
        </Link>

        <div className="mt-4 text-3xl font-semibold text-center">
          Empower your Future With
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className="w-[90%] mt-1 text-center text-richblack-300 text-lg px-40 py-3">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row mt-8 gap-14">
          <CTAButton active={true} linkto={"/signup"}>
            {" "}
            Learn More{" "}
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            {" "}
            Book A Demo
          </CTAButton>
        </div>

        <div className="flex justify-center mt-7 shadow-blue-200 mb-7">
          <video
            muted
            loop
            autoPlay
            controls
            className="w-3/4 h-1/2 shadow-custom-skyblue"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section1 */}

        <div>
          <CodeBlocks
            position="lg: flex-row"
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text="Coding Potential" />
                With Our Coding Courses
              </div>
            }
            subheading="You can ace anything with our online courses and achieve your desired results."
            ctabtn1={{
              btntext: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btntext: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n< lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Simple HTML Template</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Website</h1>\n  </header>\n  <m>\n    <section>\n      <h2>About</h2>\n      <p>This is a simple HTML template.</p>\n    </section>\n    <>\n      <h2>Contact</h2>\n      <p>Email: `}
            codeColor="text-yellow-25"
          />
        </div>

        {/* code section 2 */}

        <div className="flex flex-row mr-[30%] ">
          <CodeBlocks
            position="lg: flex-row-reverse "
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text="Coding Potential" />
                With Our Coding Courses
              </div>
            }
            subheading="You can ace anything with our online courses and achieve your desired results."
            ctabtn1={{
              btntext: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btntext: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n< lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Simple HTML Template</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Website</h1>\n  </header>\n  <m>\n    <section>\n      <h2>About</h2>\n      <p>This is a simple HTML template.</p>\n    </section>\n    <>\n      <h2>Contact</h2>\n      <>Email: example@example.com<`}
            codeColor="text-yellow-25"
          />
        </div>
      </div>

      <ExploreMore></ExploreMore>

      {/* section2 */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[200px]">
          <div className="flex flex-col items-center justify-between w-11/12 gap-5 mx-uto flex2 item-cs-center max-w-maxContent">
            <div className="h-[80px]"></div>

            <div className="flex flex-row gap-16 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2 ">
                  Explore to catalog
                  <FaLongArrowAltRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Learn More
                  <FaLongArrowAltRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-[11/12] flex flex-col gap-5 items-center max-w-maxContent mx-auto">
          {/* divone */}
          <div className="flex flex-row items-center mx-auto w-[70%]  mb-10 mt-24">
            <div className="text-4xl font-semibold w-[40%] mx-14">
              Get The Skill You Need for a
              <HighlightText text={"job that is in demand"} />
            </div>
            {/* divtwo */}
            <div className="flex flex-col gap-5 w-[35%] mx-14">
              <div className="text-[14px] text-richblack-600">
                “Our EdTech platform leverages cutting-edge technology to create
                engaging, personalized learning experiences. We provide a wide
                range of digital tools"
              </div>
              <div className="w-[100px]">
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>

          <TimelineSection></TimelineSection>
          <LearningLanguageSection></LearningLanguageSection>
        </div>
      </div>

      {/* section3 */}

      <div className="flex-col justify-between w-11/12 mx-auto text-white max-w-maxContent items-centre bg-richblack-900">
        <InstructureSection></InstructureSection>

        <h2 className="mt-10 text-4xl font-semibold text-center">
          Review form other Learners
        </h2>
        <ReviewSlider></ReviewSlider>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
