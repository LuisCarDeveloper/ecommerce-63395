import { useState, useContext } from "react";
import CheckoutPresentation from "./CheckoutPresentation";
import { CartContext } from "../../../context/CartContext";
import { Timestamp,collection, addDoc } from "firebase/firestore";
import Loader from "../../common/loader/Loader";
import db from "../../../db/db";
import Order from "../order/order";


export default function Checkout(){

    const [dataForm, setDataForm] = useState({
        fullname:'',
        phone:'',
        email:''
    })

    const [orderID, setOrderId]=useState()

     const {cart, totalPrice} = useContext(CartContext)

     const handleChangeInput = (event) => {

        setDataForm ({ ...dataForm, [event.target.name]:event.target.value})
     }
     const handleSubmit = async (event) => {
        event.preventDefault()
        const orderData = { 
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice(),
            date:Timestamp.fromDate( (new Date))
        }
        await uploadOrder(orderData)
     }

     const uploadOrder = async(newOrder) =>{
        try{

            const ordersRef = collection(db,'orders')
            const response = await addDoc(ordersRef, newOrder )
            setOrderId (response.id)
        }catch(error){
            console.log(error)
        }
     }
    return (
        
        <div> {
        orderID
           ? ( <Order orderID={orderID} /> ) 
            :   ( <CheckoutPresentation
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit} /> )
        }        
        </div>

    )
}