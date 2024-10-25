import React, { useEffect } from 'react'
import SideNav from '../SideNav/SideNav'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  let navigate = useNavigate()
  useEffect(()=>{
  if(!sessionStorage.getItem("email")){
    navigate("/")
  }
  },[])
  return (
    <div className='flex w-full '>
      <div className='hidden lg:block'>
        <SideNav/>

      </div>
        <div className='w-full'>
        <Navbar/>
        <Outlet/>
        </div>
      
    </div>
  )
}
