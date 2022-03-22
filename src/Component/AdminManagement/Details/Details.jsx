import React, { Component } from "react";
import top100Films from "../../JSON/movie.json"
import { Card, CardContent, Rating, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, TextField, Autocomplete, Button } from "@mui/material";
// class StudentDetails extends React.Component{
// export default class StudentDetails extends Component{
//one component export
// export class StudentDetails extends Component{
//     render(){
//         return(
//             <div>
//                 <h3>Student Details</h3>
//             </div>
//         )
//     }
// }

//more than one

//binding 3 ways
//1.constructor bind
//2 within line bind
//3.auto-binding (arrow) - w/o use bind 

//setting state this.setState({varaibleNAme :value}) -variable -[name] e.target.name
class StudentDetails extends Component {
  constructor(props){
      super(props);
      this.state={
          movie:'',
          gender:'',
          rate:'',
          btnNAme:'Submit'
      }
      this.handleGenderChange=this.handleGenderChange.bind(this)
  }


  handleMovieChange=(e)=>{
    let {value}=e.target
    this.setState({movie:top100Films[value]}) 
  }

  handleGenderChange(e){
    let {name,value}=e.target
    this.setState({[name]:value})
  }

  handleRate(e){
    let {name,value}=e.target
    this.setState({[name]:value}) 
  }

  handleSubmit=()=>{
      console.log(this.state)
  }

    render() {
        return (
            <Card sx={{ minWidth: 500, margin: '20px auto' }}>
                <CardContent>
                    <h3>Class Component setState() for variable-Binding </h3>
                    <div className="input-field">
                        <Autocomplete fullWidth value={this.state.movie} onChange={this.handleMovieChange}
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>

                    <div className="input-field">
                        <FormControl fullWidth>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="input-field">
                        <Typography component="legend">Please Share your rating</Typography>
                        <Rating  name="rate" value={this.state.rate} onChange={this.handleRate.bind(this)}/>
                    </div>
                    <Button variant="contained" onClick={this.handleSubmit}>{this.state.btnNAme}</Button>
                </CardContent></Card>
        )
    }
}

class CollegeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          college:{
              collegeName:'',
              address:'',
              phoneNum:''
          }
        }
    }
    handleChange=(e)=>{
        let {name,value}=e.target;
        // let collegeDetails={...this.state.collge}
        // collegeDetails[name]=value;
        //  this.setState({college:collegeDetails})
        console.log(name,value)
         let college={...this.state.college}
         college[name]=value;
        // this.setState({college:college})
         this.setState({college},()=>{
             console.log("after",this.state.college)
         })
         console.log("after state line",this.state.college)
   
    }
    componentDidMount(){
        console.log("mouting")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("update",prevProps,prevState)
        if(prevState.college.address !==this.state.college.address)
        {
          alert("address")
        }
        console.log("currentValue",this.props,this.state)
    }

    componentWillUnmount(){
        console.log("unmount")
    }
    
    handleSubmit=()=>{
        console.log(this.state.college)
    }
    render() {
        return (
            <Card sx={{ minWidth: 500, margin: '20px auto' }}>
                <CardContent>  
                <h3>Class Component setState() for object-Binding </h3>
                    <div className="input-field">
                        <TextField fullWidth id="outlined-basic" name="collegeName" value={this.state.college.collegeName} onChange={this.handleChange} label="College Name" variant="outlined" />
                    </div>
                    <div className="input-field">
                        <TextField fullWidth multiline   name="address" value={this.state.college.address} onChange={this.handleChange} rows={4} cols={5} id="outlined-multiline-flexible"
                            label="Address" variant="outlined" />
                    </div>
                    <div className="input-field">
                        <TextField fullWidth   name="phoneNum" value={this.state.college.phoneNum} onChange={this.handleChange} id="outlined-basic" label="PhoneNum" variant="outlined" />
                    </div>

                    <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
                </CardContent></Card>
        )
    }
}

export { StudentDetails, CollegeDetails };

//export default ->will use name to import
//export -> {} ,we can use alias StudentDetails as Student, more than one component
