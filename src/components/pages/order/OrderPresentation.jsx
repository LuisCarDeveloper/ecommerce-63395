import { Link } from "react-router-dom";
import formattDate from "../../../helpers/fomatDateFire";
import './Order.scss'

export default function OrderPresentation({orderData}){
    return (
        <div>
            <h2 className="successMessage">Felicitaciones...!!! su compra con ID : <span>{orderData.id}</span> ha sido exitosa.</h2>
            <h2 className="successMessage">por favor guarde el detalle de su Orden</h2>
            <div className="containerOrder">
                <h3>Orden Compra Detallada</h3>
                <div className="orderSection">
                    <h4>Datos Orden</h4>
                    <p>ID Orden: <span>{orderData.id}</span></p>
                    <p>Importe: S/. <span>{parseFloat(orderData.total).toFixed(2).toLocaleString("en-US")}</span></p>
                    <p>Fecha y Hora : <span>{formattDate(orderData)}</span> </p>                    
                </div>
                <div>
                    <h4 className="buyerSection">Datos Comprador</h4>
                    <p>Nombre: <span>{orderData.buyer?.fullname}</span></p>
                    <p>Teléfono: <span>{orderData.buyer?.phone}</span></p>
                    <p>email: <span>{orderData.buyer?.email}</span></p>     
                </div>
                <div className="buySection">
                        <h4 >Productos Comprados</h4>
                        <ul>
                            {orderData.products?.map( (product)=>(
                                <li>
                                    {`${product?.quantity} ${product?.category} ${product?.trade} ${product?.trade} ${product?.type} x ${product?.pack} ${product?.unity} ${product?.volumen}  unid. P.U: S/. ${product?.priceReg} Monto : S/. ${parseFloat(product?.quantity*product?.priceReg).toFixed(2)}`}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                <Link to="/"><button>Aceptar</button></Link>   
            </div>
        </div>
    )
}
