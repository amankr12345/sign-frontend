import {useState} from 'react'
import { Button, Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'
function SignIn(){
    //const navigate=useNavigate()
    const [text,setText]=useState({})
    const handleChange=(e)=>{
            const {name,value}=e.target
            setText({...text,[name]:value})
    }
    const handleSubmit=async ()=>{
        const {email,password}=text
        axios.post('http://localhost:3030/app/signIn',{email:email,password:password})
        .then(res=>console.log(res))
        alert('logged succesfully')
        


    }
    return(
        <>
         <Container fixed>
          <Box sx={{bgcolor:'#cfe8fc',height:'100vh'}}>
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
                        type="password"
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
            </Box>
         </Container>
        </>

    )
}

export default SignIn