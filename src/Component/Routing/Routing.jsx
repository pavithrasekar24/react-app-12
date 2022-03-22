import React from 'react';
import { BrowserRouter,Route ,Redirect} from 'react-router-dom';
import Login from "../Login/Login";
import {AdminRouting} from "../AdminManagement/AdminRouting/AdminRouting"
export function Routing(){
    return(
           <div>
               <BrowserRouter>
                <Redirect from="/" to ="/login"/>
                <Route exact path="/login" component={Login}/>
                <Route path="/admin" component={AdminRouting}/>
               </BrowserRouter> 
               
           </div>
    )
}