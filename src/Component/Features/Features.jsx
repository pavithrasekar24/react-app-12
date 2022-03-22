import React from 'react';

import StaffDetails from '../AdminManagement/StaffDetails/StaffDetails';
import {StudentDetails as Student,CollegeDetails as College} from "../AdminManagement/StudentDetails/StudentDetails"
export function Features(){
    return(
        <>
      <hr/>
      <h5>Hello World</h5>
      <StaffDetails/>
      <Student/>
      <College/>
        </>
    )
}