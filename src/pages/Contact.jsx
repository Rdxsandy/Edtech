import React from "react";

import Footer from "../components/common/Footer";
import ContactDetails from "../components/ContactPage/ContactDetails";
import ContactForm from "../components/ContactPage/ContactForm";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-between w-11/12 gap-10 mx-auto mt-20 text-white max-w-maxContent lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="flex-row">
        <h2 className="mt-10 text-4xl font-semibold text-center text-white">
          Review form other Learners
        </h2>
        <ReviewSlider></ReviewSlider>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
