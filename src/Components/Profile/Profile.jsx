import React from 'react'
import img from "../../assets/images/Sidebar/pexels-photo-2379004 1.png";
import GeneralForm from '../../Utils/GeneralForm';
export default function Profile() {
  return (

<>
<GeneralForm who={"view"} Crudusers={"Profile"} updateUser={{firstName:" Madesh" ,lastName:" Karthi" , email:"Karthi.Madesh@gmail.info" ,age:"23", birthDate:"8/10/2001", phone:"01095895972" }} />
</>
  )
}
