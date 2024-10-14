import React from 'react'
import img from "../../assets/images/Sidebar/pexels-photo-2379004 1.png";
export default function Profile() {
  return (
    <div className='p-5'>

    <h2 className='ps-2 text-[22px] font-bold leading-[26.82px] text-left'> Profile</h2>

    <hr className='w-[99%] mx-auto bg-[#ccc8c8] border-0 h-[2px] my-3' />

 <div className='w-full relative'>

<div className='w-[80%] mx-auto rounded-[20px] bg-white shadow-[2px 5px 10px 0px #0000001A] mt-20 pb-10 p-5'>
 <img src={img} alt="" className='absolute -top-[70px] lg:left-[45%] left-[35%]  rounded-full' />

<div className='lg:flex gap-8 w-full mt-20'>
<div className="flex flex-col gap-3 w-full">
  <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">First Name</label>
  <input type='text' value={"Karthi"} placeholder="Enter your First Name" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
 </div>
<div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
<label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Last Name</label>
<input type='text' value={" Madesh"} placeholder="Enter Last Name" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
 </div>
</div>
<div className='lg:flex gap-8 w-full mt-8'>
<div className="flex flex-col gap-3 w-full">
  <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Email </label>
  <input type='Email'value={"Karthi.Madesh@gmail.info"} placeholder="Enter your Email" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
 </div>
<div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
<label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Age</label>
<input type='number'value={"23"} placeholder="Enter your age" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
 </div>
</div>
<div className='lg:flex gap-8 w-full mt-8'>
<div className="flex flex-col gap-3 w-full">
  <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Phone Number</label>
  <input type='text'value={"01095895972"} placeholder="Enter your Email" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
 </div>
<div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
<label htmlFor=""  className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">birth Date</label>
<input
type="date"
value={  new Date("8/10/2001").toISOString().split('T')[0] }
placeholder="Enter your birth date"
className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none placeholder-gray-400"
/>
 </div>
</div>



</div>
 </div>
   
  </div>
  )
}
