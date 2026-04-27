import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./slices/authSlice";
import { setUser } from "./slices/profileSlice";
import { ACCOUNT_TYPE } from "./utils/constants";
import Navbar from "./components/common/Navbar";

// Lazy load all pages for code splitting (improves initial load time)
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const UpdatePassword = lazy(() => import("./pages/UpdatePassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ViewCourse = lazy(() => import("./pages/ViewCourse"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Error = lazy(() => import("./pages/Error"));
const LoginForm = lazy(() => import("./components/core/Auth/LoginForm"));
const OpenRoute = lazy(() => import("./components/core/Auth/OpenRoute"));
const PrivateRoute = lazy(() => import("./components/core/Auth/PrivateRoute"));
const MyProfile = lazy(() => import("./components/core/Dashboard/MyProfile"));
const Settings = lazy(() => import("./components/core/Dashboard/Settings"));
const AddCourse = lazy(() => import("./components/core/Dashboard/AddCourse"));
const MyCourses = lazy(() => import("./components/core/Dashboard/MyCourses"));
const Instructor = lazy(() =>
  import("./components/core/Dashboard/InstructorDashboard/Instructor")
);
const EnrolledCourses = lazy(() =>
  import("./components/core/Dashboard/EnrolledCourses")
);
const Cart = lazy(() => import("./components/core/Dashboard/Cart"));
const EditCourse = lazy(() =>
  import("./components/core/Dashboard/EditCourse")
);
const VideoDetails = lazy(() =>
  import("./components/core/ViewCourse/VideoDetails")
);

// Full-page loading spinner shown while lazy chunks load
const PageLoader = () => (
  <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
    <div className="spinner"></div>
  </div>
);

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  // Restore user and token from localStorage on app load
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (token) dispatch(setToken(token));
    if (savedUser) dispatch(setUser(savedUser));
  }, [dispatch]);

  return (
    <div className="flex flex-col w-screen min-h-screen bg-richblack-900 font-inter">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog/:catalogName" element={<Catalog />} />
          <Route path="courses/:courseId" element={<CourseDetails />} />
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
          <Route
            path="forgot-password"
            element={
              <OpenRoute>
                <ForgotPassword />
              </OpenRoute>
            }
          />
          <Route
            path="update-password/:id"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          />
          <Route
            path="verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/settings" element={<Settings />} />

            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route
                  path="dashboard/enrolled-courses"
                  element={<EnrolledCourses />}
                />
              </>
            )}

            {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route
                  path="dashboard/edit-course/:courseId"
                  element={<EditCourse />}
                />
              </>
            )}
          </Route>

          <Route
            element={
              <PrivateRoute>
                <ViewCourse />
              </PrivateRoute>
            }
          >
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            )}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
