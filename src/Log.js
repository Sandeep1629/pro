import React ,{useState,useContext} from 'react'
import axios from 'axios';
import { Card } from "@mui/material";
import { store } from './App';
import { Redirect } from 'react-router-dom';
import "./Log.css"
const Log=()=>
{
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
       
        email:'',
        password:''

    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>
    {
        e.preventDefault();
        axios.post("http://localhost:5000/login",data).then(
            res => setToken(res.data.token)
        )
    }
    if(token)
    {
       return  <Redirect to='/myprofile'/>
    }
    return(
        <div className='Crd'>
             <center>
             <Card sx={{ maxWidth:525 }}>
            
            <form onSubmit={submitHandler} autoComplete="off">
                <h3>Login</h3>
               
                <input type ="email" onChange={changeHandler} name="email" placeholder='Email'/><br/>
                <input type ="password" onChange={changeHandler} name="password" placeholder='Password'/><br/>
                <input type ="Submit"  value="Login"/><br/>
            </form> 
           
            </Card>
            </center>
        </div>
      
    ) 
}
export default Log