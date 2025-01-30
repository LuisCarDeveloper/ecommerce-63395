import {createContext, useEffect, useState} from 'react';

const CartContext = createContext()

const CartProvider = ({children})=>{
    const cartLocalStore = JSON.parse (localStorage.getItem("cart-ecommerce"))
    const [ cart, setCart ] = useState ( cartLocalStore || [] ) 
    
    useEffect(()=>{
        localStorage.setItem("cart-ecommerce",JSON.stringify(cart))
    },[cart])

    const addProduct = ( newProduct ) => {
        const index = cart.findIndex ( (productCart) => productCart.id === newProduct.id)
        if (index===-1){
            setCart ( [...cart, newProduct ] )        
        } else {
            const newCart = [...cart]
            newCart[index].quantity += newProduct.quantity
            setCart (newCart)
        }
    }

    const addProductById = ( id ) => {
        const index = cart.findIndex ( (productCart) => productCart.id === id)
        const newCart = [...cart]
        newCart[index].quantity += 1
        setCart (newCart)}

    const removeProductId = ( id ) => {
        const index = cart.findIndex ( (productCart) => productCart.id === id)
        const newCart = [...cart]
        newCart[index].quantity -= 1
        setCart (newCart)}

    const totalQuantity = () => {   
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);      
        return quantity;
    };    

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => 
            total + productCart.quantity * parseFloat(productCart.priceReg || 0), 0);
        return price;
    };

    const deleteProductById=(idProduct)=>{
        console.log('Se ejecuta el delete')
        const filterProducts =  cart.filter ( (productCart) => productCart.id !== idProduct)
        setCart(filterProducts)
    }

    const deleteCart =()=>{
        setCart([])
    }
    

    return (
        <CartContext.Provider value = { { cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart, addProductById,removeProductId } }>
            {children}
        </CartContext.Provider>
        )
    }

    export { CartContext, CartProvider}
