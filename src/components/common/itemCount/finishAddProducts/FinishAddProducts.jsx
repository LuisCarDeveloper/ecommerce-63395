import { Link } from "react-router-dom"

export default function FinishAddProducts ( { className, openModal}){

    return (
            <div className={className}>
                <button className ='addProducts' onClick = {()=>{openModal()}} ><span>Agregar Producto</span></button>
                <Link to='/'  className ='backStart'>Volver al Inicio</Link>       
            </div>              
    )

}