import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css"

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavDetails: [
                {id:1,path:'/admin/staff',label:'Staff'},
                {id:2,path:'/admin/student',label:'Student'},
                {id:3,path:'/admin/college',label:'College'},
                {id:4,path:'/admin/parent-child',label:'ParentChild'},
                {id:5,path:'/admin/data-share-nested-comp',label:'NestedComponent'}               
            ]
        }
    }

    render() {
        return (
            <div className='sidebar-inner'>
                <nav>
                    {/* <li>
                        <Link to="/admin/staff">Staff</Link>
                    </li>
                    <li>
                        <Link to="/admin/student">Student</Link>
                    </li> */}
     
                        {this.state.sideNavDetails.map((item,i)=>{
                            return(
                                <li className='list-item' key={i}>
                                <Link to={item.path}>{item.label}</Link>
                                </li>
                            )

                        })}
                   
                    </nav>
            </div>
        )
    }
}
