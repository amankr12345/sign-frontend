import { useNavigate } from "react-router-dom"

function Header(){
    const navigate=useNavigate()
    return(
        <>
        <button onClick={()=>navigate('signUp')}>Sign UP</button>
        <button onClick={()=>navigate('signIn')}>Sign IN</button>
        <button onClick={()=>navigate('/')}>HOME</button>
        </>
    )
}
export default Header