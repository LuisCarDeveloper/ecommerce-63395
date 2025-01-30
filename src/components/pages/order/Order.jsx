import { getDoc,doc } from "firebase/firestore";
import { useState,useEffect } from "react";
import Loader from "../../common/loader/Loader";
import OrderPresentation from "./OrderPresentation";
import db from "../../../db/db";

export default function Order({orderID}){

  const [orderData, setOrderData]=useState({})
  const [ loading, setLoading] = useState( true )

  useEffect( ()=>{
      const getOrderByID = async (orderID) => {
          try{
                setLoading(true)
              const ordersRef = doc(db,"orders", orderID)
              const docSnap = await getDoc(ordersRef);
              if (docSnap.exists()) {
                  setOrderData({ id: docSnap.id, ...docSnap.data() }) ; // Retorna el documento con su ID
                } else {
                  console.log("No existe un documento con ese ID.");
                  return null;
                }
          } catch (error){
              throw new Error (' Error al recuperar Orden de base de datos')
          }finally{
            setLoading(false)
          }
      }

  getOrderByID(orderID)

  }, [ orderID ] )

      return (
          loading
          ? <Loader/>
          : <div>
              <OrderPresentation orderData ={orderData}/>
            </div>


      )
}
