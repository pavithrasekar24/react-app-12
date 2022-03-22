import React, {  useState } from 'react';
import person from "../../JSON/person.json"
import cartoonImage from "../../../assets/images/logo.jfif";
import { Button, Card, CardContent, FormControl, InputLabel ,TextField,MenuItem,Select} from '@mui/material';
import './StaffDetails.css';
export default function StaffDetails() {

  // const [email, setEmail] = useState('');
  // const [staffName, setStaffName] = useState('');

  const [staffDetails,setStaffDetails]=useState({
    staffName:'',
    subject:'',
    email:'',
    collegeName:''
  })

  // let handleChange = (e) => {
  //   console.log(e.target.value)
  //   setEmail(e.target.value)
  // }

  let handleChange=(e)=>{
    //destructing -ES6 feature
    // let name=e.target.name;
    // let {name}=e.target;
    // let value=e.target.value;

    let {name,value}=e.target;

     console.log(name,value)

    let staffDet={...staffDetails}
     staffDet[name]=value;
     console.log(staffDet)
     setStaffDetails(staffDet)
  }


  

  let handleSubmit=()=>{
    //  let data={
    //    staffName:staffName,
    //    email:email
    //  }
     console.log(staffDetails)
  }


  return (
    <Card sx={{ minWidth: 500, margin: '20px auto' }}>
                <CardContent>
    <h3>Function Component useState()</h3>
      <img style={{ 'width': '100px', 'height': '100px',borderRadius:'50%' }} src={cartoonImage} alt='not-found' />
      <div className='input-field'>
        <TextField fullWidth id="outlined-basic" label="StaffName" variant="outlined"   name="staffName" value={staffDetails.staffName}  onChange={handleChange}/>
      </div>
      <div className='input-field'>
        <TextField fullWidth id="outlined-basic" label="Subject" variant="outlined"   name="subject" value={staffDetails.subject}  onChange={handleChange}/>
      </div >
      <div className='input-field'>
        <TextField fullWidth id="outlined-basic" label="CollegeName" variant="outlined"  name="collegeName" value={staffDetails.collegeName}  onChange={handleChange}/>
      </div>
      <div className='input-field'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Email</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name='email'
            value={staffDetails.email}
            label="Email"
            onChange={handleChange}
          >
            {person.map((p,i) => {
              return (
                <MenuItem  key={i} value={p.email}>{p.name} {p['email']}</MenuItem>
              )
            })}
          </Select>

        </FormControl>
      </div>
      <Button variant="contained" onClick={handleSubmit}>Submit </Button>
</CardContent>
</Card>
  );
}