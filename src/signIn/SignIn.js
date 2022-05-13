import {useState} from 'react'
import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
function SignIn(){
    const [text,setText]=useState({})
    const handleChange=(e)=>{
            const {name,value}=e.target
            setText({...text,[name]:value})
    }
    const handleSubmit=async ()=>{
        const {email,password}=text
        axios.post('http://localhost:3030/app/signIn',{email:email,password:password})
        .then(res=>console.log(res))


    }
    return(
        <>
        <Grid container spacing={2}>
                
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="email" 
                        label="Email" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                    </Grid>
                    
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="password" 
                        label="Password" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                    </Grid>
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSubmit}
                        variant="contained"
                    >SIGN IN
                    </Button>
                </Grid>
            </Grid>
        
        </>

    )
}

export default SignIn