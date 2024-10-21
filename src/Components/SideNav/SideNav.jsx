// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoMdHome } from "react-icons/io";
// import { FaUserCircle, FaUserPlus, FaUsers } from 'react-icons/fa';
// import { RiLogoutCircleRLine } from 'react-icons/ri';
// import img from "../../assets/images/Sidebar/pexels-photo-2379004 1.png";
// import Style from "./SideNav.module.css"; // Assuming custom styles are added here
// import { CiBookmark, CiUser } from "react-icons/ci";
// import { LuUsers } from 'react-icons/lu';
// export default function SideNav() {
//   // State to track the active menu item
//   const [activeMenuItem, setActiveMenuItem] = useState('home');

//   // Function to handle menu item click
//   const handleMenuItemClick = (menuItem) => {
//     setActiveMenuItem(menuItem);
//   };

//   // Helper function to handle active menu item styles
//   const getMenuItemClass = (menuItem) => {
//     return activeMenuItem === menuItem
//       ? `bg-[#FEAF00] rounded-md `
//       : `${Style.menuItem}`;
//   };

//   return (
//     <div className='relative'>
//       <Sidebar className={`h-screen min-w-full bg-[#F2EAE1]   fixed top-0 left-0 ` }>
//         <div className='flex flex-col justify-center items-center py-10'>
//           <img src={img} alt="profile" className='rounded-full' />
//           <h2 className='text-[#000000] font-montserrat text-[17px] font-bold leading-[20.72px] text-center mt-6'>
//             Karthi Madesh
//           </h2>
//           <p className='text-[#FEAF00]'>Admin</p>
//         </div>

//         <Menu className='flex flex-col justify-center items-center  ' aria-label="Sidebar navigation">
//           <MenuItem
//             component={<Link to={""} />}
//             icon={<IoMdHome />}
//             onClick={() => handleMenuItemClick('home')}
//             className={getMenuItemClass('home')}
//           >
//             Home
//           </MenuItem>

//           <MenuItem
//             component={<Link to={"user-list"} />}
//             icon={<CiBookmark />}
//             onClick={() => handleMenuItemClick('users')}
//             className={getMenuItemClass('users')}
//           >
//             Users
//           </MenuItem>

//           <MenuItem
//             component={<Link to={"add-user"} />}
//             icon={<LuUsers />}
//             onClick={() => handleMenuItemClick('add-user')}
//             className={getMenuItemClass('add-user')}
//           >
//             Add Users
//           </MenuItem>

//           <MenuItem
//             component={<Link to={"profile"} />}
//             icon={<CiUser />}
//             onClick={() => handleMenuItemClick('profile')}
//             className={getMenuItemClass('profile')}
//           >
//             Profile
//           </MenuItem>

       
//         </Menu>
//         <Menu className='absolute bottom-3 flex  justify-center items-center  w-full'>
//         <MenuItem
//             component={<Link to={"/login"} />}
//             icon={<RiLogoutCircleRLine />}
//           >
//             Log out
//           </MenuItem>
//         </Menu>
//       </Sidebar>
//     </div>
//   );
// }




import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaUserCircle, FaUserPlus, FaUsers } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import img from "../../assets/images/Sidebar/pexels-photo-2379004 1.png";
import Style from "./SideNav.module.css"; // Assuming custom styles are added here
import { CiBookmark, CiUser } from "react-icons/ci";
import { LuUsers } from 'react-icons/lu';

export default function SideNav() {
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const getMenuItemClass = (menuItem) => {
    return activeMenuItem === menuItem
      ? `bg-[#FEAF00] rounded-md`
      : `${Style.menuItem}`;
  };

  return (
    <div className='sticky top-0 bottom-0 left-0'>
      <Sidebar className={`h-screen max-h-screen overflow-y-auto bg-[#F2EAE1] relative  w-[250px]`}>
      <div className="p-3">
          <div className="border-l-4 mt-5 border-[#FEAF00] ps-3 font-montserrat text-2xl font-bold leading-[29.26px] text-left ">
            UMS
          </div>
        </div>
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
            onClick={()=>{localStorage.clear()}}
          >
            Log out
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
