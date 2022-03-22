import { Card, CardContent, Typography,TextField,Button } from "@mui/material";
import { useState } from "react";
import { CityDropdown } from "../CityDropdown/CityDropdown";

export function AddCity() {
    const [city,setCity]=useState('');
    const [cityDetails,setCityDetails]=useState(['Chennai','Bangalore'])


    let handleChange=(e)=>{
        setCity(e.target.value)
    }

    let handleAdd=()=>{
        let cities=[...cityDetails];
        cities.push(city);
        console.log(cities)
        setCity('')
        setCityDetails(cities);
    }
    let getIndex=(index)=>{
   console.log("parent",index)
    let cities=[...cityDetails];
    cities.splice(index,1);
    setCityDetails(cities);
    }
    return (
        <Card sx={{ minWidth: 500, margin: '20px auto' }}>
        <CardContent>
        <h3>Parent -Child and Child -Parent Data sharing </h3>
        <p>
            Parent -child( using Props -Property) changing state - props will change automaticlaly ,
             props readonly can't change by child component
             Child -Parent (using funtion() like event binding)
        </p>
        <Typography> Add City</Typography>

        <TextField id="outlined-basic" label="City" value={city} onChange={handleChange}  variant="outlined" />
        <Button variant="contained" onClick={handleAdd}>Add</Button>


        <CityDropdown citiesArr={cityDetails} city={city} sendIndex={getIndex} />

        </CardContent>
        </Card>
        )
} 