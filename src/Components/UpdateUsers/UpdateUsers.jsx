
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import GeneralForm from '../../Utils/GeneralForm'

export default function UpdateUsers() {
    let { id } = useParams()
    let [user, setUser] = useState({})

 
    let getSpecificUser = async (id) => {
        await axios.get(`https://dummyjson.com/users/${id}`).then(res => {
            setUser(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getSpecificUser(id)
    }, [id])

 
  

    return (


         <>
 <GeneralForm updateUser={user} methodType={"put"} who={"update"}  Crudusers={"Update User"} />
 </> 
    )
}
