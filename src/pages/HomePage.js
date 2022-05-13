import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate=useNavigate()
    return(
        <>
         <Container fixed>
          <Box sx={{bgcolor:'#cfe8fc',height:'100vh'}}>
            <h1 style={{textAlign:'center'}}>Admin DashBoard Management System</h1>
            <button onClick={()=>navigate('signUp')}>Sign UP</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>navigate('signIn')}>Sign IN</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>navigate('/')}>HOME</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>navigate('/')}>Contact US</button>
          </Box>
      </Container>   
        </>

    )
}
export default HomePage