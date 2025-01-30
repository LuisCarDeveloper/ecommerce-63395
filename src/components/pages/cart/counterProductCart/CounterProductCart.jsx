import { useState } from "react"
import { useContext } from "react"
import './CounterProductCart.scss'
import { CartContext } from "../../../../context/CartContext"

export default function CounterProductCart ( {countInit, stock, id}){
  
  const { cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart,addProductById,removeProductId } = useContext(CartContext)
	const [ count, setCount ] = useState(countInit)
    console.log(id)
    const handleClickRemove =(id)=>{
      if (count > 1){
          setCount((prevCount) => prevCount - 1)
          removeProductId(id)
          
        }
      }

    const handleClickAdd=()=>{
       if(count < stock){
          setCount((prevCount) => prevCount + 1)
          addProductById(id)
        }
    }
    
    return (
            <div className="counterProductCart" >
                <button onClick = {()=>handleClickRemove(id)}>-</button>
                <div> {count} </div>
                <button onClick = {()=>handleClickAdd(id)}>+</button>
            </div>      
    )

}