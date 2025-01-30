import ItemCountPresentation from "./ItemCountPresentation"
import { useState } from "react";
import ModalAdd from "../modalAdd/ModalAdd"
import './ItemCount.scss'
export default function ItemCount ( {stock, addProductInCart,product }){
    
    const [ count, setCount ] = useState(1)
    const [ isModalOpen, setModalOpen ] = useState(false);

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

   const openModal=()=>{

     setModalOpen(true)
   }
 
   const closeModal=()=>{
     setModalOpen(false)
     setTimeout(() => {
        addProductInCart(count);
    }, 0);

   }
    
    return (
        <div>
            <ItemCountPresentation
                addProductInCart = { addProductInCart }
                handleClickRemove = { handleClickRemove }
                handleClickAdd = { handleClickAdd }
                openModal={openModal}
                count={count}
            />
            <ModalAdd isModalOpen={isModalOpen} closeModal={closeModal} product={product}/>
        </div>
    )
    
}