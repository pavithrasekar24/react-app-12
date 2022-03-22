import { Card } from "@mui/material";
import React, { useState } from "react";
import Started from "../Started/Started";
import { StatusContext } from "../StatusContext";

export default function StatusDropdown() {

    const [status, setStatus] = useState('');
    const statusOption = ['initialization', 'Started', 'Pending', 'Completed'];
    
    let handleUpdate=(value)=>{
        setStatus(value)
    }


    return (
        <div style={{ 'margin': '30px'}}>
        <Card style={{'padding':'30px' }}>
            <h3>Data Sharing between the connecting loop component using context</h3>
         {/* StatusDropdown -> dropdown  , status , handleStatus , listItem
            Props drilling  -use avoid useContext 
            source  component data  -comp1 -comp2-->destination component
<Started status={status}  handleStatus={handleStatus}/>
started -btn props.status, props.handleStatus(value) -- <Pending status={props.status} />
pending -btn  props.status, props.handleStatus(value) -- <Completed status={props.status} />
completed  -bt
a-b-c-d -connecting loop component / nested component 
  // useContext 
  step 1. create context 
  step 2. source component providing value to the context
  step 3. destination can retrieve directly (consume) from context  
*/}


            <select value={status} onChange={(e) =>handleUpdate(e.target.value) }>
                <option value="">Select the Status</option>
                {statusOption.map((item, i) => {
                    return <option key={i + 1}>{item}</option>;
                })}
            </select>
            <h3>Selected Status : {status} </h3>

     <StatusContext.Provider value={{status,handleUpdate}}>
        <Started/>
        </StatusContext.Provider>
        </Card>
        </div>

    )
}