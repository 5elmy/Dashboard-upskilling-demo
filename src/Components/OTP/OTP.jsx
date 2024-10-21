
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function OTP() {

  let navigate = useNavigate()

  const loginForm = useFormik({
    initialValues: {
      otp: "",
    
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .required("otp is required"),
     
    }),
    onSubmit: async (values) => {
      console.log(values);
      setTimeout(() => {
        
          toast("Otp is successfully")
          navigate("/reset-password")
        
      },  1000); 
      

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
          Verify code
          </p>
          <p className="font-montserrat text-sm font-normal leading-[17.07px] text-center text-[#6C6C6C]">
          An authentication code has been sent to your email.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            OTP
          </label>
          <input
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.email}
            name="otp"
            placeholder="Enter your otp"
            className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
          />
          {loginForm.touched.otp && loginForm.errors.otp ? (
            <div className="text-red-500 text-sm">{loginForm.errors.otp}</div>
          ) : null}
        </div>


        <button type="submit" className="uppercase bg-[#FEAF00] w-full h-[44px] rounded-[4px] text-white my-3">
          verify
        </button>
        <div className="flex justify-center items-center">

        <small className="text-center  w-full">Already have an account? <span className="text-[#FEAF00]"><Link to={"/login"}>Login</Link></span></small>
        </div>
      </form>
    </div>
  );
}
