import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] rounded-md font-bold py-2 px-4 transition-all duration-200 hover:scale-95 ${
          active ? "bg-yellow-50 text-black" : "bg-richblack-800"
        } w-fit`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
