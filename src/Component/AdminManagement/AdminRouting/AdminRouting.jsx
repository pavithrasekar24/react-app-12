import React from 'react';
import Header from "../../Header/Header";
import {Route ,Redirect} from 'react-router-dom';
import StaffDetails from "../StaffDetails/StaffDetails"
import {CollegeDetails, StudentDetails} from "../Details/Details"
import Sidebar from "../../Sidebar/Sidebar";
import {AddCity} from '../../AdminManagement/Datasharing/AddCity/AddCity'
import StatusDropdown from '../Datasharing/Status/StatusDropdown/StatusDropdown';
export function AdminRouting(){
    return(
        <div>
         <Header/>
         <Sidebar/>
         <div className='admin-content'>
         <Route exact path="/admin/staff" component={StaffDetails}/>
         <Route exact path="/admin/student" component={StudentDetails}/>
         <Route exact path="/admin/college" component={CollegeDetails}/>
         <Route exact path="/admin/parent-child" component={AddCity}/>
         <Route exact path="/admin/data-share-nested-comp" component={StatusDropdown}/>
         <Redirect from="/admin" to="/admin/data-share-nested-comp"/>
         </div>
        </div>
    )
}