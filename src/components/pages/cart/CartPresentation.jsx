import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { capitalFirstChar } from "../../../adapters/productsAdapter";
import { RiDeleteBin5Fill } from 'react-icons/ri'
import './Cart.scss'


export default function CartPresentation (){
    const {cart, totalPrice, deleteProductById,deleteCart,totalQuantity} = useContext(CartContext)

    return(
        <div className="cartContent">
            <h3>Carrito de Compras <span>{`( ${totalQuantity()} productos )`}</span></h3>
            <ul>
            {cart.map( (productCart)=> (
                <li key={productCart.id}>
                    <img src={`/img/${productCart.id}.webp`} alt={productCart.id} width={100}/>
                    <p> { capitalFirstChar(productCart.category) }  { capitalFirstChar(productCart.trade) }  { capitalFirstChar(productCart.type) } x { productCart.pack }
                        { productCart.unity } - { productCart.volumen }</p>

                    <p>{`S/. ${productCart.priceReg}`} </p>
                    <p>Cantidad :{` ${productCart.quantity}`}</p>
                    <p>Monto: S/. {parseFloat(productCart.priceReg*productCart.quantity).toFixed(2)} </p>
                    <RiDeleteBin5Fill   onClick={() => deleteProductById(productCart.id)}   size="40px"   color="#495867" style={{ cursor: 'pointer' }} />

                </li>
            )  )}            
            </ul>
            <div className="resumeBuy">
                <h4>Precio Total: S/. {totalPrice().toFixed(2)}</h4>
                <button onClick = {deleteCart}>Vaciar Carrito</button>
            </div>

        </div>
    )
}