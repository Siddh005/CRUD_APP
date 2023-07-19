import React from 'react'
import { TableHeading } from './TableHeading'
import { UserItem } from './UserItem'

export const Table = ({data}) => {
    function showUsers(){
        return data.map((ele)=>{return <UserItem user={ele}/>})
    }
  return (
    <div className='table'>
        <TableHeading />
        {showUsers()}
    </div>
  )
}
