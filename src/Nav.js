import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rim from './assets/Rim.jpg'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import "./Nav.css"; 
const Nav=()=>
{
    return(
        <div className='body'>
          <center>
            <Card sx={{ maxWidth:525 }}>
            
        
          <div className="log"><Typography  variant="h4">
       Customer Login
          </Typography>
          </div>
          <CardMedia
        component="img"
        sx={{ width: 355 }}
        image={Rim}
        alt="Banking"
      />
          <Typography variant="h6"  component="div">
          <Link to="/Logi"> <Button>Login </Button></Link>
          </Typography>
          <Typography variant="h6"  component="div">
          <Link to="/register"> <Button>Register </Button></Link>
          </Typography>
          <Typography variant="h6" component="div">
          <Link to="/rex"><Button> Admin </Button></Link>
          </Typography>
      
     
    </Card>
    </center>  
          
        </div>
    )
}
export default Nav