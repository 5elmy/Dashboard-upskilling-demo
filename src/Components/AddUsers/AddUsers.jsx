// import { useFormik } from 'formik'
// import React from 'react'

// export default function AddUsers() {
//   let Adduser = useFormik({
//     initialValues:{
//       firstName:"",
//       lastName:"",
//       email:"",
//       age:"",
//       phoneNumber:"",
//       birthDate:""
//     },
//     onSubmit:(values)=>{
//       console.log(values);
      
//     }
//   })
//   return (
//     <div className='p-5'>

//       <h2 className='ps-2 text-[22px] font-bold leading-[26.82px] text-left'> Add Users</h2>

//       <hr className='w-[99%] mx-auto bg-[#ccc8c8] border-0 h-[2px] my-3' />

//       <div className='w-[80%] mx-auto rounded-[20px] bg-white shadow-[2px 5px 10px 0px #0000001A] mt-20 p-5'>

//    <div className='lg:flex gap-8 w-full mt-12'>
//    <div className="flex flex-col gap-3 w-full">
//         <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">First Name</label>
//         <input type='text' placeholder="Enter your First Name" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
//        </div>
//       <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
//       <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Last Name</label>
//       <input type='text' placeholder="Enter Last Name" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
//        </div>
//    </div>
//    <div className='lg:flex gap-8 w-full mt-8'>
//    <div className="flex flex-col gap-3 w-full">
//         <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Email </label>
//         <input type='Email' placeholder="Enter your Email" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
//        </div>
//       <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
//       <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Age</label>
//       <input type='number' placeholder="Enter your age" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
//        </div>
//    </div>
//    <div className='lg:flex gap-8 w-full mt-8'>
//    <div className="flex flex-col gap-3 w-full">
//         <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Phone Number</label>
//         <input type='text' placeholder="Enter your Phone Number" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
//        </div>
//       <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
//       <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">birth Date</label>
//       <input
//   type="date"
//   placeholder="Enter your birth date"
//   className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none placeholder-gray-400"
// />       </div>
//    </div>

//    <div className='flex justify-center items-center mt-8'>
//    <button className='bg-[#FEAF00] w-[415px] h-[44px]  rounded-[4px] text-white font-montserrat text-[14px] font-medium leading-[17.07px] '>Save</button>
//    </div>

//       </div>
     
//     </div>
//   )
// }
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddUsers() {
  // Define the validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First Name is required')
      .min(2, 'First Name must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(2, 'Last Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    age: Yup.number()
      .required('Age is required')
      .positive('Age must be positive')
      .integer('Age must be an integer')
      .min(18, 'You must be at least 18 years old'),
    phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^[0-9]+$/, 'Phone Number must be only digits')
      .min(10, 'Phone Number must be at least 10 digits'),
    birthDate: Yup.date()
      .required('Birth Date is required')
      .max(new Date(), 'Birth Date cannot be in the future'),
  });

  let Adduser = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      phoneNumber: '',
      birthDate: ''
    },
    validationSchema, // Add validation schema here
    onSubmit:async (values) => {
      console.log(values);
      console.log(JSON.stringify({
        id: 11,
        name: values.firstName + values.lastName,
        username: "elonmusk",
        email: values.email
      }));
      
        await axios.post('https://dummyjson.com/users/add',values,{headers: {
          'Content-type': 'application/json'
        }}).then(res=>{
          console.log(res);
          toast("User Add successfully")
          
        }).catch(err=>{
          console.log(err);
          toast.error("reject add user")
          
        })

    }
  });

  return (
    <div className='p-5'>
      <h2 className='ps-2 text-[22px] font-bold leading-[26.82px] text-left'>Add Users</h2>
      <hr className='w-[99%] mx-auto bg-[#ccc8c8] border-0 h-[2px] my-3' />

      <form onSubmit={Adduser.handleSubmit}>
        <div className='w-[99%] md:w-[80%] mx-auto rounded-[20px] bg-white shadow-[2px 5px 10px 0px #0000001A] mt-20 p-5'>
          <div className='lg:flex gap-8 w-full mt-12'>
            <div className="flex flex-col gap-3 w-full">
              <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">First Name</label>
              <input 
                type='text' 
                placeholder="Enter your First Name" 
                className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
                name="firstName"
                onChange={Adduser.handleChange}
                value={Adduser.values.firstName}
              />
              {Adduser.errors.firstName && <div className="text-red-500">{Adduser.errors.firstName}</div>}
            </div>

            <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
              <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Last Name</label>
              <input 
                type='text' 
                placeholder="Enter Last Name" 
                className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
                name="lastName"
                onChange={Adduser.handleChange}
                value={Adduser.values.lastName}
              />
              {Adduser.errors.lastName && <div className="text-red-500">{Adduser.errors.lastName}</div>}
            </div>
          </div>

          <div className='lg:flex gap-8 w-full mt-8'>
            <div className="flex flex-col gap-3 w-full">
              <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Email</label>
              <input 
                type='email' 
                placeholder="Enter your Email" 
                className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
                name="email"
                onChange={Adduser.handleChange}
                value={Adduser.values.email}
              />
              {Adduser.errors.email && <div className="text-red-500">{Adduser.errors.email}</div>}
            </div>

            <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
              <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Age</label>
              <input 
                type='number' 
                placeholder="Enter your age" 
                className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
                name="age"
                onChange={Adduser.handleChange}
                value={Adduser.values.age}
              />
              {Adduser.errors.age && <div className="text-red-500">{Adduser.errors.age}</div>}
            </div>
          </div>

          <div className='lg:flex gap-8 w-full mt-8'>
            <div className="flex flex-col gap-3 w-full">
              <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Phone Number</label>
              <input 
                type='text' 
                placeholder="Enter your Phone Number" 
                className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
                name="phoneNumber"
                onChange={Adduser.handleChange}
                value={Adduser.values.phoneNumber}
              />
              {Adduser.errors.phoneNumber && <div className="text-red-500">{Adduser.errors.phoneNumber}</div>}
            </div>

            <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
              <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Birth Date</label>
              <input 
                type="date" 
                placeholder="Enter your birth date" 
                className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none placeholder-gray-400"
                name="birthDate"
                onChange={Adduser.handleChange}
                value={Adduser.values.birthDate}
              />
              {Adduser.errors.birthDate && <div className="text-red-500">{Adduser.errors.birthDate}</div>}
            </div>
          </div>

          <div className='flex justify-center items-center mt-8'>
            <button type="submit" className='bg-[#FEAF00] w-[415px] h-[44px] rounded-[4px] text-white font-montserrat text-[14px] font-medium leading-[17.07px]'>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
