import React from 'react';
import { useFormik } from 'formik';

import axios from 'axios';
import { toast } from 'react-toastify';

import img from "../assets/images/Sidebar/pexels-photo-2379004 1.png";
import { validationSchema, validationSchemaUpdate } from './schema';
export default function GeneralForm({who , methodType , Crudusers ,updateUser }) {

   
    
      let user = useFormik({
        initialValues: {
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          age: undefined,
          phoneNumber: undefined,
          birthDate: undefined
        },
       validationSchema: who =="add" ? validationSchema : validationSchemaUpdate
          , 
        onSubmit:async (values) => {
          values={
            firstName: values.firstName || updateUser.firstName,
            lastName: values.lastName || updateUser.lastName,
            email: values.email || updateUser.email,
            age: values.age || updateUser.age,
            phoneNumber: values.phoneNumber || updateUser.phone,
            birthDate: values.birthDate ||updateUser.birthDate
          }
            console.log(values);

               await axios[methodType](`https://dummyjson.com/users/${who=="add"?"add" :`${updateUser.id}`}`,values,{headers: {
                'Content-type': 'application/json'
              }}).then(res=>{
                console.log(res);
                
                // toast.success(`${values.firstName}  ${values.lastName}  ${who== `add` ? "Add":"Update" }  Sucessfully !!!`)
                {who== "add" ?  toast.success(`${values.firstName}  ${values.lastName}  Add  Sucessfully !!!`) : toast.success(`${res.data.firstName}  ${res.data.lastName}  Update Sucessfully !!!`)}
                
              }).catch(err=>{
                console.log(err);
                toast.error(`Failed to  ${who== `add` ? "Add":"Update" } User Try Again`)  
              })  
          
         
    
        }
      });
  return (
    <div className='p-5'>
    <h2 className='ps-2 text-[22px] font-bold leading-[26.82px] text-left'>{Crudusers }</h2>
    <hr className='w-[99%] mx-auto bg-[#ccc8c8] border-0 h-[2px] my-3' />

    <form onSubmit={user.handleSubmit} className='relative'>
        {who =="view" ?<img src={img} alt="" className='absolute -top-[70px] lg:left-[45%] left-[35%]  rounded-full' /> :""}
    
      <div className='w-[99%] md:w-[80%] mx-auto rounded-[20px] bg-white shadow-[2px 5px 10px 0px #0000001A] mt-20 p-5'>
        <div className='lg:flex gap-8 w-full mt-12'>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">First Name</label>
            <input 
              type='text' 
              placeholder="Enter your First Name" 
              className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
              name="firstName"
              onChange={user.handleChange}
                disabled={who=="view"}
            value={updateUser ?(user.values.firstName != undefined? user.values.firstName: updateUser.firstName):(user.values.firstName)}
            />
          
            {user.touched.firstName && user.errors.firstName ? (
                            <div className="text-red-500 text-sm">{user.errors.firstName}</div>
                        ) : null}
          </div>

          <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
            <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Last Name</label>
            <input 
              type='text' 
              placeholder="Enter Last Name" 
              className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
              name="lastName"
              onChange={user.handleChange}
              disabled={who=="view"}
              value={updateUser ?(user.values.lastName != undefined? user.values.lastName: updateUser.lastName):(user.values.lastName)}
            />
           
            {user.touched.lastName && user.errors.lastName ? (
                            <div className="text-red-500 text-sm">{user.errors.lastName}</div>
                        ) : null}
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
              onChange={user.handleChange}
              disabled={who=="view"}
              value={updateUser ?(user.values.email != undefined? user.values.email: updateUser.email):(user.values.email)}
            />
           
            {user.touched.email && user.errors.email ? (
                            <div className="text-red-500 text-sm">{user.errors.email}</div>
                        ) : null}
          </div>

          <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
            <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Age</label>
            <input 
              type='number' 
              placeholder="Enter your age" 
              className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"
              name="age"
              onChange={user.handleChange}
              disabled={who=="view"}
            value={updateUser ?(user.values.age != undefined? user.values.age: updateUser.age):(user.values.age)}
            />
           
            {user.touched.age && user.errors.age ? (
                            <div className="text-red-500 text-sm">{user.errors.age}</div>
                        ) : null}
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
              onChange={user.handleChange}
              disabled={who=="view"}
            value={updateUser ?(user.values.phoneNumber != undefined? user.values.phoneNumber: updateUser.phone):(user.values.phoneNumber)}
            />
           
            {user.touched.phoneNumber && user.errors.phoneNumber ? (
                            <div className="text-red-500 text-sm">{user.errors.phoneNumber}</div>
                        ) : null}
          </div>

          <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
            <label className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Birth Date</label>
            <input 
              type="date" 
              placeholder="Enter your birth date" 
              className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none placeholder-gray-400"
              name="birthDate"
              onChange={user.handleChange}
              disabled={who=="view"}

            value={
                user.values.birthDate !== undefined 
                    ? user.values.birthDate 
                    : updateUser && updateUser.birthDate 
                        ? new Date(updateUser.birthDate).toISOString().split('T')[0]
                        : ''
            }
            />
           
            {user.touched.birthDate && user.errors.birthDate ? (
                            <div className="text-red-500 text-sm">{user.errors.birthDate}</div>
                        ) : null}
          </div>
        </div>

{who=="view"? "":   <div className='flex justify-center items-center mt-8'>
          <button type="submit"   className={`bg-[#FEAF00] w-[415px] h-[44px] rounded-[4px] text-white font-montserrat text-[14px] font-medium leading-[17.07px]`}>
            {who =="add" ? "Add" :"Save" }
            
            
            </button>
        </div>}
     
      </div>
    </form>
  </div>
  )
}
