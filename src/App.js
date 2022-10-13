import ReactDOM from "react-dom"; 
import React from "react"; 
import Money from "./Money";
import Layout from './Layout'
import Nav from "./Nav"; 
import Register from "./Register"; 
import Log from "./Log"; 
import { useState,createContext } from "react"; 
import Login from './Login'
import Myprofile from './Myprofile'; 
  import {BrowserRouter,Route,Switch} from 'react-router-dom'; 
  export const store =createContext(); 
function App  (){ 
    const[token,setToken] = useState(null); 
    const rootElement = document.getElementById("root"); 
    ReactDOM.render( 
   
      <BrowserRouter> 
      <store.Provider value={[token,setToken]}> 
       <Switch> 
        <Route exact path='/' component={Nav}/> 
       <Route path='/register' component={Register}/> 
        <Route path='/Logi' component={Log}/> 
        <Route path='/myprofile' component={Myprofile}/> 
        <Route path='/rex' component={Login}/> 
        <Route path="/money" component={Money} />
        <Route path='/home' component={Layout}/> 
      </Switch> 
      </store.Provider>  
      </BrowserRouter>, 
      rootElement 
    ); 
 
    
} 
export default App;