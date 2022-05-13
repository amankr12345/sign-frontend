//import { useNavigate } from "react-router-dom"
import { Button, Grid, TextField } from '@mui/material'
import {useState} from 'react'
import axios from 'axios'

const SignUp=()=>{
    const [text,setText]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target
        setText({...text,[name]:value})
        console.log(text)
    }
    const handleSubmit=async ()=>{
        const{name,email,password,address,ConfirmPassword}=text
        console.log(text)
        if(password===ConfirmPassword){
            await axios.post('http://localhost:3030/app/signUp',{name:name,email:email,address:address,password:password})
            .then(res=>console.log(res.data))
            .catch((err)=>console.log(err))
            
            alert("registerd succedssfully")
        }
        else{
           alert('invalid input')
        }
       
    }
   // const navigate=useNavigate()
    return(
        <>
       
        <Grid container spacing={2}>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="name" 
                        label="Name" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
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
                        name="address" 
                        label="address" 
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
                    <Grid item lg={12} mx={24} >
                    <TextField 
                        name="ConfirmPassword" 
                        label="ConfirmPasssword" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                    </Grid>
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSubmit}
                        variant="contained"
                    >SIGN UP
                    </Button>
                </Grid>
            </Grid>
        
        </>
    )
}
export default SignUp