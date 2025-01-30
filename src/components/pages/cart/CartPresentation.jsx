import CounterProductCart from "./counterProductCart/counterProductCart";
import FinishAddProductCart from "./finishAddProductinCart/finishAddProductinCart";

import { capitalFirstChar } from "../../../adapters/productsAdapter";
import { RiDeleteBin5Fill } from 'react-icons/ri'

import { Link } from "react-router-dom";
import './Cart.scss'


export default function CartPresentation ( {cart, totalQuantity,	addProduct,	totalPrice,	deleteProductById,	deleteCart}){

		
    return(
			<div className="cartContent">
				<div >
            <h3>Carro <span> ( {totalQuantity()} productos ) </span></h3>
            <ul className="cartList">
            {cart.map( (productCart)=> (
                <li key={productCart.id}>
                    <img src={productCart.image} alt={productCart.id} width={100}/>
                    <div> { capitalFirstChar(productCart.category) }  { capitalFirstChar(productCart.trade) }  { capitalFirstChar(productCart.type) } x { productCart.pack }
                        { productCart.unity } - { productCart.volumen }</div>
                  
                    <div>{`S/. ${productCart.priceReg}`} </div>
										<div>
											<CounterProductCart countInit={productCart.quantity} stock={productCart.stock} id={productCart.id} />            											
										</div>
                    <div>
                    	<RiDeleteBin5Fill   onClick={() => deleteProductById(productCart.id)}   size="18px"   color="#495867" style={{ cursor: 'pointer' }} />											
										</div>
                </li>
            )  )} 
            <div className="lastButtonCart">
              <Link to='/' className="backStart">Seguir Comprando</Link>
              <button className="buttonCart" onClick = {deleteCart}>Vaciar Carrito</button>          
            </div>
            
            </ul>
						
        </div>
				<div className="resumeCartContainer" >
								<h3> Resumen de orden	</h3>
                <div className="resumeCart">
                  <div>  Productos{" "}( {totalQuantity()} ) &nbsp;&nbsp;&nbsp; {`S/.${totalPrice().toFixed(2)}`}</div>
								  <div>Total : S/. {totalPrice().toFixed(2)}</div>
                  <Link className="buttonCart" to="/checkout" >Continuar con esta compra</Link>
                </div>
								
            </div>
			</div>
        
    )
}