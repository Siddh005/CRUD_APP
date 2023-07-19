import React from 'react'

export const UserItem = ({user}) => {
  return (
    <div className='useritem'>
        <p className='username'>{user.name}</p>
        <p className='usermail'>{user.email}</p>
        <p className='usercontact'>{user.contact}</p>
    </div>
  )
}
