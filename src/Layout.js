import Home from "./Home";
import { Link } from "react-router-dom"; 
import { AppBar, Toolbar, Typography } from "@mui/material"; 
import "./Layout.css"; 
import Money from "./Money";
const Layout = () => { 
  return ( 
    <div> 
      
      <AppBar position="fixed" elevation={0} color=""> 
        <Toolbar className="app_items"> 
          <Link to="/"> 
            <Typography className="logo">Banking Admin Panel</Typography> 
          </Link> 
          <div className="appbar__right"> 
          <Typography className="appbar__rightChild"> 
                Emi
              </Typography> 
              <Typography className="appbar__rightChild"> 
              <Link to='/curr'>  Currency </Link>
              </Typography> 
              <Typography className="appbar__rightChild"> 
                Transaction History 
              </Typography> 
              <Typography className="appbar__rightChild"> 
                Account Holders
              </Typography> 
      <Link to='/forms'>
              <Typography className="appbar__rightChild"> 
               Transfer 
              </Typography> 
              </Link> 
              <Typography className="appbar__rightChild"> 
          <Link to='/'>  Logout
          </Link>
              </Typography> 
            
         
          </div> 
        </Toolbar>
        <div className="money__right"> 
        <Home /> 
      </div> 
      </AppBar> 
      
      
     
    </div> 
    
  ); 
}; 
 
export default Layout;