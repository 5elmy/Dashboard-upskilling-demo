
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import img from "../../assets/images/Sidebar/pexels-photo-2379004 1.png";
import Style from "./SideNav.module.css";
import { CiBookmark, CiUser } from "react-icons/ci";
import { LuUsers } from 'react-icons/lu';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function SideNavSmall() {
  
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setSidebarVisible(false); 
  };


  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };


  const getMenuItemClass = (menuItem) => {
    return activeMenuItem === menuItem
      ? `bg-[#FEAF00] rounded-md `
      : `${Style.menuItem}`;
  };

  return (
    <div className='relative'>
     
      <div className="md:hidden flex justify-between items-center p-4">

        <FaBarsStaggered onClick={toggleSidebar} className="text-xl cursor-pointer" />
      </div>

     
      <div
        className={`fixed top-0 left-0 h-screen w-[250px] bg-[#F2EAE1] z-50 transition-transform duration-300 ease-in-out transform ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Sidebar className={`h-full bg-[#F2EAE1] sticky top-0`}>
          <div className='flex flex-col justify-center items-center py-10'>
            <img src={img} alt="profile" className='rounded-full' />
            <h2 className='text-[#000000] font-montserrat text-[17px] font-bold leading-[20.72px] text-center mt-6'>
              Karthi Madesh
            </h2>
            <p className='text-[#FEAF00]'>Admin</p>
          </div>

          <Menu className='flex flex-col justify-center items-center' aria-label="Sidebar navigation">
            <MenuItem
              component={<Link to={""} />}
              icon={<IoMdHome />}
              onClick={() => handleMenuItemClick('home')}
              className={getMenuItemClass('home')}
            >
              Home
            </MenuItem>

            <MenuItem
              component={<Link to={"user-list"} />}
              icon={<CiBookmark />}
              onClick={() => handleMenuItemClick('users')}
              className={getMenuItemClass('users')}
            >
              Users
            </MenuItem>

            <MenuItem
              component={<Link to={"add-user"} />}
              icon={<LuUsers />}
              onClick={() => handleMenuItemClick('add-user')}
              className={getMenuItemClass('add-user')}
            >
              Add Users
            </MenuItem>

            <MenuItem
              component={<Link to={"profile"} />}
              icon={<CiUser />}
              onClick={() => handleMenuItemClick('profile')}
              className={getMenuItemClass('profile')}
            >
              Profile
            </MenuItem>
          </Menu>

          <Menu className='absolute bottom-3 flex justify-center items-center w-full'>
            <MenuItem
              component={<Link to={"/login"} />}
              icon={<RiLogoutCircleRLine />}
            >
              Log out
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      {/* Overlay to close the sidebar on click (only on small screens) */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}