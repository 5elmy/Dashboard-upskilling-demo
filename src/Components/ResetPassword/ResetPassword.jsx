import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {

  let navigate = useNavigate();

  // Validation schema
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("New Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required")
  });

  const loginForm = useFormik({
    initialValues: {
      password: "",
      confirmpassword: ""
    },
    validationSchema, // Apply the validation schema here
    onSubmit: async (values) => {
      console.log(values);
      toast.success("Password reset successful");
      navigate("/");
    }
  });

  return (
    <div className="min-h-screen bg-[#FEAF00] flex justify-center items-center">
      <form onSubmit={loginForm.handleSubmit} className="bg-[#FFFFFF] w-[80%] md:w-[50%] lg:w-[30%] rounded-[20px] p-5 shadow-[2px 5px 10px 0px #0000001A]">
        <div className="flex justify-center items-center">
          <div className="border-l-4 border-[#FEAF00] ps-3 font-montserrat text-2xl font-bold leading-[29.26px] text-left ">
            User Management System
          </div>
        </div>
        <div className="my-6">
          <p className="font-montserrat text-xl font-semibold leading-[26.82px] text-center py-3 uppercase">
          Set a password
          </p>
          <p className="font-montserrat text-sm font-normal leading-[17.07px] text-center text-[#6C6C6C]">
          Your previous password has been reseted. Please set a new password for your account.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            New Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter New Password"
            className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.password}
          />
          {loginForm.touched.password && loginForm.errors.password ? (
            <div className="text-red-500 text-sm">{loginForm.errors.password}</div>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <label htmlFor="confirmpassword" className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Enter Confirm Password"
            className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.confirmpassword}
          />
          {loginForm.touched.confirmpassword && loginForm.errors.confirmpassword ? (
            <div className="text-red-500 text-sm">{loginForm.errors.confirmpassword}</div>
          ) : null}
        </div>

        <button type="submit" className="uppercase bg-[#FEAF00] w-full h-[44px] rounded-[4px] text-white my-3">
          Submit
        </button>
        <div className="flex justify-center items-center">
          <small className="text-center w-full">
            Already have an account? <span className="text-[#FEAF00]"><Link to={"/login"}>Login</Link></span>
          </small>
        </div>
      </form>
    </div>
  );
}
