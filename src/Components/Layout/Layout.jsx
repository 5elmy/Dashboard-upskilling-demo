import React from 'react'
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
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
