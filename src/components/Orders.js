import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Orders.css"
const Orders = () => {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="orders">
      <h1>Thank you {user?.email.substring(0,4)} </h1>
      <p>Your ordered successful</p>
      <p>at email {user?.email}</p>
    </div>
  )
}

export default Orders