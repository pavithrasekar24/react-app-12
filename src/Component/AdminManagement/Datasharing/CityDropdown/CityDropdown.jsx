import { List, ListItem, Button } from '@mui/material';
import React, { useEffect } from 'react';

export function CityDropdown(props) {
    
    useEffect(() => {
        console.log("mouting")
    }, [])


    useEffect(() => {
        console.log("subjetc", props.citiesArr)
    }, [props.citiesArr])

    useEffect(() => {
        console.log("city", props.city)
    }, [props.city])

    useEffect(() => {
        return () => {
            console.log("unmount")
        }
    }, [])

    let handleDelete = (i) => {
        props.sendIndex(i);
    }
    return (
        <div>
            <h1>City Details -{props.city}</h1>
            {
                props.citiesArr.map((item, i) => {
                    return (
                        <List key={i} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                {item}
                                <Button color="secondary" variant="contained" onClick={() => handleDelete(i)}>Delete</Button>
                            </ListItem>
                        </List>
                    )

                })
            }

        </div>
    )
} 