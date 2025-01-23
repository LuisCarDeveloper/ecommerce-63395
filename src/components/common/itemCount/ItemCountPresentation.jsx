import { useState } from "react";

export default function ItemCountPresentation ( {stock, addProductInCart}){

    const [ count, setCount ] = useState(1)

    const handleClickRemove =()=>{
        if (count > 1){
            setCount((prevCount) => prevCount - 1)
        }
    }

    const handleClickAdd=()=>{
        if(count < stock){
            setCount((prevCount) => prevCount + 1)
        }

    }
    

    return (
        <div className='addProducts'>
            <div className='counterProducts' >
            <button onClick = {handleClickRemove}>-</button>
            <div> {count} </div>
            <button onClick = {handleClickAdd}>+</button>
            </div>
            <button onClick = {()=>addProductInCart(count)} ><span>Agregar Producto</span></button>
        </div>
    )

}