import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { PiCaretCircleLeft } from 'react-icons/pi'
import SideNavSmall from '../SideNav/SideNav.smallscreen'

export default function Navbar() {
  return (
    <div className='w-full'>
      <div className='h-[60px] bg-white flex justify-between items-center min-w-full'>
        <div className='ps-2 hidden lg:block' ><PiCaretCircleLeft className='text-[25px] text-gray-300' /></div>
        <div className='ps-2 lg:hidden block' ><SideNavSmall/></div>
        <div className='flex gap-5 items-center px-4'>
        <input placeholder="Search" type='text' className="border md:w-[300px] focus:outline-gray-300 border-gray-300 h-[36px] rounded-[4px] focus:border-none"/>

          <CiBellOn  className='text-[25px] text-gray-300' />
          </div>
      </div>
    </div>
  )
}
