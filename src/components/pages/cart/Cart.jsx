import CartPresentation from "./CartPresentation";
import { CartContext } from "../../../context/CartContext";
import { useContext,useState } from "react";


export default function Cart (){
    
    const {cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    return (
        <CartPresentation 
            cart={cart} 
            totalQuantity={totalQuantity}
            addProduct={addProduct}
            totalPrice={totalPrice}
            deleteProductById={deleteProductById}
            deleteCart={deleteCart}
 />
    )
}