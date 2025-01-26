import { getDoc,doc } from "firebase/firestore";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../../../db/db";
import './Order.scss'


export default function OrderPresentation({orderID}){

const [orderData, setOrderData]=useState({})

useEffect(()=>{
    const getOrderByID = async (orderID) => {
        try{
            console.log(orderID)
            const ordersRef = doc(db,"orders", orderID)
    
            const docSnap = await getDoc(ordersRef);
            if (docSnap.exists()) {
                console.log("Documento encontrado:", docSnap.data());
                setOrderData({ id: docSnap.id, ...docSnap.data() }) ; // Retorna el documento con su ID
              } else {
                console.log("No existe un documento con ese ID.");
                return null;
              }
    
        } catch (error){
            console.log(error)
        }
    }

getOrderByID(orderID)

},[orderID])

  // Formatear la fecha desde los valores de Firestore
  const formattedDate = new Date(orderData.date?.seconds * 1000).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",    // Incluir la hora
    minute: "2-digit",  // Incluir los minutos
    hour12: false,      // Formato de 24 horas
  });

  

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
                    <p>Fecha y Hora : <span>{formattedDate}</span> </p>                    
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
