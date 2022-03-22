import React, { useContext } from 'react'
import Completed from '../Completed/Completed'
import { StatusContext } from '../StatusContext'
export default function Pending(){
  let {status,handleUpdate}=useContext(StatusContext);

  let updateValue=()=>{
    console.log('pendig')
    handleUpdate('Pending')
  }
    return(
        <div>
          <h4>Pending Component
          <h1>{status}</h1>
          <button onClick={updateValue}>update pending</button>
          </h4>
          <Completed/>
        </div>
    )
}