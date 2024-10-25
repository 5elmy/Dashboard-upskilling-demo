import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  let navigate = useNavigate()

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
    }),
    onSubmit: async (values) => {
      console.log(values);
      sessionStorage.setItem("email",values.email)
      toast("login is successfully")

      navigate("/dashboard")

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
            Sign In
          </p>
          <p className="font-montserrat text-sm font-normal leading-[17.07px] text-center text-[#6C6C6C]">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Email
          </label>
          <input
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.email}
            name="email"
            placeholder="Enter your Email"
            className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
          />
          {loginForm.touched.email && loginForm.errors.email ? (
            <div className="text-red-500 text-sm">{loginForm.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 my-3">
          <label htmlFor="password" className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Password
          </label>
          <input
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.password}
            name="password"
            type="password"
            placeholder="Enter your Password"
            className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
          />
          {loginForm.touched.password && loginForm.errors.password ? (
            <div className="text-red-500 text-sm">{loginForm.errors.password}</div>
          ) : null}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-[#FEAF00] font-montserrat text-[14px] font-medium leading-[17.07px]"> <input className="mt-1" type="checkbox" /> remember me</div>
          <p className="text-[#FEAF00] font-montserrat text-[14px] font-medium leading-[17.07px]"><Link to={"/forget-password"}>Forget Password ?</Link></p>
        </div>

        <button type="submit" className="uppercase bg-[#FEAF00] w-full h-[44px] rounded-[4px] text-white my-3">
          Sign in
        </button>
      </form>
    </div>
  );
}
