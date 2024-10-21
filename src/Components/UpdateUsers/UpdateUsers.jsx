import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function UpdateUsers() {
    let {id} = useParams()
    let [user, setUser] = useState({})
    let getSpecificUser = async(id)=>{
        await axios.get(`https://dummyjson.com/users/${id}`).then(res=>{
            console.log(res);

            setUser(res.data)
            
        }).catch(err=>{
            console.log(err);
            
        })
    }
    useEffect(()=>{
        getSpecificUser(id)
    },[])

    let updateuser = useFormik({
        initialValues:{
            firstName:undefined,
            lastName:undefined,
            phone:undefined
        },
        onSubmit:async(values)=>{
            if(values.phone == undefined){
                values.phone= user.phone
            }
            if(values.lastName == undefined){
                values.lastName= user.lastName
            }
            if(values.firstName == undefined){
                values.firstName= user.firstName
            }
            console.log(values);

            await axios.put(`https://dummyjson.com/users/${id}`,values).then(res=>{
                console.log(res);
                toast("update data successfully !!!")
                
            }).catch(err=>{
                console.log(err);
                toast.error("reject update data successfully !!!")
                
            })
            
            
        }
    })

  return (
    <div className='p-5'>

    <h2 className='ps-2 text-[22px] font-bold leading-[26.82px] text-left'> Update User</h2>

    <hr className='w-[99%] mx-auto bg-[#ccc8c8] border-0 h-[2px] my-3' />

    <form onSubmit={updateuser.handleSubmit } className='w-[99%] md:w-[80%] mx-auto rounded-[20px] bg-white shadow-[2px 5px 10px 0px #0000001A] mt-20 p-5'>

 <div  className='lg:flex gap-8 w-full mt-12'>
 <div className="flex flex-col gap-3 w-full">
      <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">First Name</label>
      <input name='firstName' onChange={updateuser.handleChange} onBlur={updateuser.handleBlur} value={ updateuser.values.firstName != undefined? updateuser.values.firstName: user.firstName} type='text' placeholder="Enter your First Name" className="border  focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
     </div>
    <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
    <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Last Name</label>
    <input name='lastName' onChange={updateuser.handleChange} onBlur={updateuser.handleBlur} value={updateuser.values.lastName != undefined ? updateuser.values.lastName :user.lastName} type='text' placeholder="Enter Last Name" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
     </div>
 </div>
 <div className='lg:flex gap-8 w-full mt-8'>
 <div className="flex flex-col gap-3 w-full">
      <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Email </label>
      <input value={user.email} type='Email' placeholder="Enter your Email" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
     </div>
    <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
    <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Age</label>
    <input value={user.age} type='number' placeholder="Enter your age" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
     </div>
 </div>
 <div className='lg:flex gap-8 w-full mt-8'>
 <div className="flex flex-col gap-3 w-full">
      <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">Phone Number</label>
      <input name='phone' onChange={updateuser.handleChange} onBlur={updateuser.handleBlur} value={updateuser.values.phone != undefined ?updateuser.values.phone : user.phone} type='text' placeholder="Enter your Phone Number" className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none"/>
     </div>
    <div className="flex flex-col gap-3 w-full mt-5 lg:mt-0">
    <label htmlFor="" className="text-[#6C6C6C] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">birth Date</label>
    <input
    value={user.birthDate ? new Date(user.birthDate).toISOString().split('T')[0] : ''}
    type="date"
    placeholder="Enter your birth date"
    className="border focus:outline-gray-300 border-gray-300 h-[44px] rounded-[4px] focus:border-none placeholder-gray-400"
/>      </div>
 </div>

 <div className='flex justify-center items-center mt-8'>
 <button type='submit' className='bg-[#FEAF00] w-[415px] h-[44px]  rounded-[4px] text-white font-montserrat text-[14px] font-medium leading-[17.07px] '>Save</button>
 </div>

    </form>
   
  </div>
  )
}
