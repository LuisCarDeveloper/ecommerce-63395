import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export default function CarWidgetPresentation ( { className } ) {
  const { totalQuantity } = useContext( CartContext )
  let quantity = totalQuantity()
  return ( 

    <div className={className}>
      
      <AiOutlineShoppingCart className = 'cart-logo'/>

      {quantity!==0&&<div className = 'container-cartbadge'>
        <div className = 'cartbadge-logo'/>
          <span className = 'cartbadge-content'>{quantity}</span>
        <div className = 'cartbadge-logo'/>
      </div>} 

    </div>
  );
};
