import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.scss'


export default function CartPresentation (){
    const {cart, totalPrice, deleteProductById,deleteCart} = useContext(CartContext)

    return(
        <div className="cartContent">
            <ul>
            {cart.map( (productCart)=> (
                <li key={productCart.id}>
                    <img src={`/img/${productCart.id}.webp`} alt={productCart.id} width={100}/>
                    <p> { productCart.category } - { productCart.trade } - { productCart.type } x { productCart.pack }
                        { productCart.unity } - { productCart.volumen }</p>

                    <p>Precio Unit: S/. {productCart.priceReg} </p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio Parcial: S/. {productCart.priceReg*productCart.quantity} </p>
                    <button onClick = {()=> deleteProductById(productCart.id)}>Eliminar</button>

                </li>
            )  )}            
            </ul>
            <h3>Precio Total: S/. {totalPrice()}</h3>
            <button onClick = {deleteCart}>Vaciar Carrito</button>
        </div>
    )
}