import image from "./assets/moneyTransfer.svg"; 
import "./Money.css"; 
import Form from "./form"; 
import { Link } from "react-router-dom";
 
const Money = () => { 
  return ( 
    <div className="money"> 
      <div className="money__left"> 
        <div className="money__image"> 
         <Link to="/home"> <img src={image} alt="" /></Link> 
        </div> 
      </div> 
      <div className="money__right"> 
        <Form /> 
      </div> 
    </div> 
  ); 
}; 
 
export default Money; 