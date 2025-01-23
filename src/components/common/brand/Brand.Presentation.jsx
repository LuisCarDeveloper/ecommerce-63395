import { Link } from "react-router-dom";
export default function BrandPresentation  ( { className } ) {
  
  return ( 

    <Link className = { className } to='/'>

        <img src = "src\assets\img\LogoBeerClick-color.svg" alt = "logo" />
        <span> Beer Click</span>
        
    </Link>
    );
};