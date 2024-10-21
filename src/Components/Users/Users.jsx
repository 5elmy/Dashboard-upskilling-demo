
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineDelete } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import img from "../../assets/images/Sidebar/pexels-photo-2379004 1.png";
import { USMModal } from '../Modal/Modal'
export default function Users() {
  let [users, setUsers] = useState([])
  let [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(7) 

  let navigate = useNavigate()
  let getAllUser = async () => {
    await axios.get("https://dummyjson.com/users").then(res => {
      console.log(res);
      setUsers(res.data.users)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getAllUser()
  }, [])

  
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='p-5'>

      <div className='flex justify-between items-center'>
        <h2 className='ps-2 text-[22px] font-bold leading-[26.82px] text-left'>Users List</h2>
        <Link to={"/dashboard/add-user"}>
          <button className='uppercase bg-[#FEAF00] text-white rounded-[4px] w-[199px] h-[44px] font-montserrat text-[14px] font-medium leading-[17.07px] text-center'>
            Add New User
          </button>
        </Link>
      </div>

      <hr className='w-[99%] mx-auto bg-[#ccc8c8] border-0 h-[2px] my-2' />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="w-[50px] h-[50px]  px-6 py-3"></th>
              <th scope="col" className="px-6 py-3 font-montserrat text-[12px] font-semibold leading-[14.63px] text-center text-[#ACACAC]"> Name</th>
              <th scope="col" className="px-6 py-3 font-montserrat text-[12px] font-semibold leading-[14.63px] text-center text-[#ACACAC]">Email</th>
              <th scope="col" className="px-6 py-3 font-montserrat text-[12px] font-semibold leading-[14.63px] text-center text-[#ACACAC]">Phone Number</th>
              <th scope="col" className="px-6 py-3 font-montserrat text-[12px] font-semibold leading-[14.63px] text-center text-[#ACACAC]">Birth Date</th>
              <th scope="col" className="px-6 py-3 font-montserrat text-[12px] font-semibold leading-[14.63px] text-center text-[#ACACAC]">Age</th>
              <th scope="col" className="px-6 py-3 font-montserrat text-[12px] font-semibold leading-[14.63px] text-center text-[#ACACAC]">Country</th>
              <th scope="col" className="px-2 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user,index) => (
              <React.Fragment key={user.id}>
                <tr className="bg-white rounded-[10px]">
                  <td className="w-full md:w-[70px] rounded-lg">
                   
                    <img src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} className='w-full h-full object-fill' alt="" />
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-[12px] text-gray-900 whitespace-nowrap dark:text-white">
                    {user.firstName + " " + user.maidenName + " " + user.lastName}
                  </th>
                  <td className="px-6 py-4 text-[12px]">{user.email}</td>
                  <td className="px-6 py-4 text-[12px]">{user.phone}</td>
                  <td className="px-6 py-4 text-[12px]">{user.birthDate}</td>
                  <td className="px-6 py-4 text-[12px]">{user.age}</td>
                  <td className="px-6 py-4 text-[12px]">{user.address.address}, {user.address.city}, {user.address.country}</td>
                  <td className="px-6 py-4 text-[20px] cursor-pointer flex gap-1 items-center">
                    <CiEdit onClick={()=>{
                      navigate(`/dashboard/user/${user.id}`)
                    }} className='text-[#FEAF00]' />
                      
                    <USMModal icon={<MdOutlineDelete className='text-[#FEAF00]' />} />

                    
                    
                    
                    </td>
                </tr>
                <tr>
                  <td colSpan="6" className="py-1"></td> 
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

  
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex items-center">
          
            {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
              <li key={index} className={`px-3 py-2 border border-gray-300 cursor-pointer ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'}`}
                onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </div>
  )
}
