import React from 'react'
import { useSelector } from 'react-redux'

const Check = () => {


    const  auth =useSelector((state)=>state.auth)
    console.log(auth.user)
  return (
    <div>
        {auth.user.email}
        {auth.token}
    </div>
  )
}

export default Check