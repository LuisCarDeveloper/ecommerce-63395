import { AiOutlineShoppingCart } from "react-icons/ai";


export default function CarWidgetPresentation ( { className } ) {
  
  return ( 

    <div className={className}>
      
      <AiOutlineShoppingCart className = 'cart-logo'/>

      <div className = 'container-cartbadge'>
        <div className = 'cartbadge-logo'/>
          <span className = 'cartbadge-content'>100</span>
        <div className = 'cartbadge-logo'/>
      </div>     

    </div>
  );
};
