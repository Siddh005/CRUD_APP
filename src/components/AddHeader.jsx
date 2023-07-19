import React from 'react'

export const AddHeader = ({add}) => {
  return (
    <div>
        <button onClick={()=>{add({name:"Gaurav",email:"gaurav@gmail"})}}>ADD</button>
    </div>
  )
}
