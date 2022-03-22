

import React from 'react'
import "./Login.css";
import profile from "../../assets/images/profile.jfif";
import { TextField ,Button} from '@mui/material';
import {useHistory} from 'react-router-dom'
export default function Login() {
    const history=useHistory();
    let handleLogin=()=>{
        alert("login successfully")
        history.push("/admin")
    }
        return (
            <div className='container'>
                <div className="login">
                    <div className="profile">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className='input-field'>
                     <TextField id="outlined-basic" label="Username" variant="outlined" />
                    </div>
                    <div className='input-field'>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <Button variant="contained" onClick={handleLogin}>LOGIN </Button>
                </div>
                </div>
        )
}
