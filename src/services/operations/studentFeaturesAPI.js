import { toast } from "react-hot-toast";

import rzpLogo from "../../assets/Logo/rzp_logo.png";
import { resetCart } from "../../slices/cartSlice";
import { setPaymentLoading } from "../../slices/courseSlice";
import { apiConnector } from "../apiConnector";
import { studentEndpoints } from "../apis";


const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints;

// Load the Razorpay SDK from the CDN

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("Razorpay SDK loaded successfully.");
      resolve(true);
    };
    script.onerror = () => {
      console.log("Failed to load Razorpay SDK.");
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// Buy the Course
export async function BuyCourse(
  token,
  courses,
  user_details,
  navigate,
  dispatch
) {
  const toastId = toast.loading("Loading...");
  console.log("BuyCourse function called");

  try {
    console.log("Loading Razorpay SDK...");
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error(
        "Razorpay SDK failed to load. Check your Internet Connection."
      );
      console.log("Razorpay SDK load failed");
      return;
    }

    console.log("Creating order from backend...");
    console.log(courses)
    const orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      { courses },
      { Authorization: `Bearer ${token}` }
    );

    if (!orderResponse.data.success) {
      console.log("Order creation failed:", orderResponse.data);
      throw new Error(orderResponse.data.message);
    }

    console.log("Order created successfully:", orderResponse.data);

    const options = {
      key: "rzp_test_MCA1cP5FYxMNLT",
      currency: orderResponse.data.data.currency,
      amount: `${orderResponse.data.data.amount}`,
      order_id: orderResponse.data.data.id,
      name: "StudyNotion",
      description: "Thank you for Purchasing the Course.",
      image: rzpLogo,
      prefill: {
        name: `${user_details.firstName} ${user_details.lastName}`,
        email: user_details.email,
      },
      handler: function (response) {
        console.log("Payment successful, handling response...", response);
        sendPaymentSuccessEmail(
          response,
          orderResponse.data.data.amount,
          token
        );
        verifyPayment({ ...response, courses }, token, navigate, dispatch);
      },
    };
    console.log("Nikesh1");

    const paymentObject = new window.Razorpay(options);
    
    
    console.log("Nikesh2");


    console.log("Opening Razorpay payment popup...");
    paymentObject.open();
    console.log("Nikesh3");


    paymentObject.on("payment.failed", function (response) {
      console.log("Payment failed with error:", response.error);
      toast.error("Oops! Payment Failed.");
      
    });
  } catch (error) {
    console.log("PAYMENT API ERROR............", error);
    toast.error("Could Not make Payment.");
  }

  toast.dismiss(toastId);
  console.log("BuyCourse function completed");
}

// Verify the Payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...");
  dispatch(setPaymentLoading(true));
  console.log("Verifying payment with data:", bodyData);

  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    });

    console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response);

    if (!response.data.success) {
      console.log("Payment verification failed:", response.data);
      throw new Error(response.data.message);
    }

    toast.success("Payment Successful. You are Added to the course ");
    console.log("Navigation to enrolled courses");
    navigate("/dashboard/enrolled-courses");
    dispatch(resetCart());
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR............", error);
    toast.error("Could Not Verify Payment.");
  }

  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
  console.log("verifyPayment function completed");
}

// Send the Payment Success Email
async function sendPaymentSuccessEmail(response, amount, token) {
  console.log("Sending payment success email...");
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("Payment success email sent successfully");
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR............", error);
  }
}
