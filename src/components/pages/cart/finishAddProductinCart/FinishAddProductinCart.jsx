import { Link } from "react-router-dom"

export default function FinishAddProductCart ( { addProduct,product}){

    return (
            <div >
                <button  onClick = {()=>addProduct(product)} ><span>Agregar Producto</span></button>     
            </div>              
    )

}