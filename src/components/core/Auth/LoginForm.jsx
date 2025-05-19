// import { useState } from "react"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"

// import { login } from "../../../services/operations/authAPI"

// function LoginForm() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)

//   const { email, password } = formData

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     dispatch(login(email, password, navigate))
//   }

//   return (
//     <form
//       onSubmit={handleOnSubmit}
//       className="flex flex-col w-full mt-6 gap-y-4"
//     >
//       <label className="w-full">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Email Address <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type="text"
//           name="email"
//           value={email}
//           onChange={handleOnChange}
//           placeholder="Enter email address"
//           className="w-full form-style"
//         />
//       </label>
//       <label className="relative">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Password <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           name="password"
//           value={password}
//           onChange={handleOnChange}
//           placeholder="Enter Password"
//           className="form-style w-full !pr-10"
//         />
//         <span
//           onClick={() => setShowPassword((prev) => !prev)}
//           className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//         >
//           {showPassword ? (
//             <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//           ) : (
//             <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//           )}
//         </span>
//         <Link to="/forgot-password">
//           <p className="mt-1 ml-auto text-xs text-blue-100 max-w-max">
//             Forgot Password
//           </p>
//         </Link>
//       </label>
//       <button
//         type="submit"
//         className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//       >
//         Sign In
//       </button>
//     </form>
//   )
// }

// export default LoginForm

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col w-full max-w-md gap-6 px-4 mx-auto mt-8 sm:px-6 md:px-8"
    >
      {/* Email Field */}
      <label className="w-full">
        <p className="mb-1 text-sm sm:text-base text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="w-full form-style"
        />
      </label>

      {/* Password Field */}
      <label className="relative w-full">
        <p className="mb-1 text-sm sm:text-base text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="w-full pr-10 form-style"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute cursor-pointer right-3 top-9"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={22} fill="#AFB2BF" />
          )}
        </span>

        <Link to="/forgot-password">
          <p className="mt-1 text-xs text-right text-blue-100 hover:underline">
            Forgot Password?
          </p>
        </Link>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-4 py-2 mt-4 font-semibold transition-all duration-200 rounded-lg bg-yellow-50 text-richblack-900 hover:bg-yellow-100"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
