import React from 'react'
import { BarDasboardCharts,  LineDashboardCharts } from '../Charts/Charts'
import {  FaUser } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'
import { GiMoneyStack } from 'react-icons/gi'

export default function Home() {
  return (
    <div className='w-[90%] mx-auto '>

      <div className=' grid grid-cols-12 mt-12 gap-5'>
        <div className='col-span-12 md:col-span-3  flex justify-center items-center'>
          <div className='w-[80%] shadow-xl bg-white flex flex-col  items-center   rounded-md relative '>

            <div className='font-[Quicksand] absolute -top-6 left-[27%] lg:left-[20%] text-white bg-[#FEAF00] flex justify-center items-center p-5 h-[46px] w rounded-md'>Total Clients</div>

     <div className='flex justify-evenly items-center gap-8  w-full pt-8'>

     <FaUser className='text-[30px]' color='#FEAF00' />
     <p className='font-[Quicksand]'>1542</p>
     </div>
     
        <div className='w-full  flex flex-col  items-center py-2'>
        <hr className='w-[90%]  bg-[#ccc8c8] border-0 h-[2px] my-3 ' />
        <p className='text-center font-[Quicksand]'>user</p>
        </div>

          </div>
       
        </div>
        <div className='col-span-12 md:col-span-3  flex justify-center items-center mt-8 md:mt-0'>
          <div className='w-[85%] shadow-xl bg-white flex flex-col  items-center   rounded-md relative '>

            <div className='absolute font-[Quicksand] -top-6 left-[19%] lg:left-[15%] text-white bg-[#FEAF00] flex justify-center items-center p-5 h-[46px] w rounded-md'>Monthly Shipments</div>

     <div className='flex justify-evenly items-center gap-8  w-full pt-8'>
     <MdLocalShipping className='text-[30px]' color='#FEAF00'  />

     <p className='font-[Quicksand]'>600</p>
     </div>
     
        <div className='w-full  flex flex-col  items-center py-2'>
        <hr className='w-[90%]  bg-[#ccc8c8] border-0 h-[2px] my-3 ' />
        <p className='text-center font-[Quicksand]'>Monthly shipment</p>
        </div>

          </div>
       
        </div>

        <div className='col-span-12 md:col-span-3  flex justify-center items-center mt-8 md:mt-0'>
          <div className='w-[85%] shadow-xl bg-white flex flex-col  items-center   rounded-md relative '>

            <div className='absolute font-[Quicksand] -top-6 left-[27%] lg:left-[15%] text-white bg-[#FEAF00] flex justify-center items-center p-5 h-[46px] w rounded-md'>Total Shipments</div>

     <div className='flex justify-evenly items-center gap-8  w-full pt-8'>
     <MdLocalShipping className='text-[30px]' color='#FEAF00'  />

     <p className='font-[Quicksand]'>4500</p>
     </div>
     
        <div className='w-full  flex flex-col  items-center py-2'>
        <hr className='w-[90%]  bg-[#ccc8c8] border-0 h-[2px] my-3 ' />
        <p className='text-center font-[Quicksand]'>Total shipment</p>
        </div>

          </div>
       
        </div>
        <div className='col-span-12 md:col-span-3  flex justify-center items-center mt-8 md:mt-0'>
          <div className='w-[85%] shadow-xl bg-white flex flex-col  items-center   rounded-md relative '>

            <div className='absolute font-[Quicksand] -top-6 left-[27%] lg:left-[20%] text-white bg-[#FEAF00] flex justify-center items-center p-5 h-[46px] w rounded-md'>Total Money</div>

     <div className='flex justify-evenly items-center gap-8  w-full pt-8'>
    
     <GiMoneyStack  className='text-[30px]' color='#FEAF00'/>
    

     <p className='font-[Quicksand]'>500743.521 $</p>
     </div>
     
        <div className='w-full  flex flex-col  items-center py-2'>
        <hr className='w-[90%]  bg-[#ccc8c8] border-0 h-[2px] my-3 ' />
        <p className='text-center font-[Quicksand]'>Total Money</p>
        </div>

          </div>
       
        </div>
       
      </div>

<div className=' mt-12'>

<BarDasboardCharts/>
</div>
<div className=' mt-12'>

<LineDashboardCharts/>
</div>
     
    </div>
  )
}
