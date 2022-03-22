import React from 'react'
import { StatusContext } from '../StatusContext'
export default function Completed(){
    return(
        <div>
         <h4>Completed Component
         <StatusContext.Consumer>
             {(details)=>{
                 return(
                     <div>
                    <h1>{details.status}</h1>
                    <button onClick={()=>details.handleUpdate('Completed')}>update Completed</button>
                    </div>
                 )
             }
             }
         </StatusContext.Consumer>
         </h4> 
        </div>
    )
}