import CarWidgetPresentation from "./CarWidget.Presentation";
import {Link} from 'react-router-dom'
import './CarWidget.scss'

export default function CarWidget () {

  return ( 
   <Link to ="/cart">
       <CarWidgetPresentation className = 'beerclk-nav__cart'/>
   </Link>

  );
};
