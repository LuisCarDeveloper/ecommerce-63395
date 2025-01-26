import { useState, useContext } from "react";
import CheckoutPresentation from "./CheckoutPresentation";
import { CartContext } from "../../context/CartContext";
import { Timestamp,collection, addDoc } from "firebase/firestore";
import db from "../../../db/db";
import OrderPresentation from "../order/OrderPresentation";


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
        <div>{
        orderID
        ?(<OrderPresentation orderID={orderID} />) /*(<div>
            <h3> Orden enviada correctamente guarde su código</h3>
            <h4>{orderID}</h4>
        </div>)*/
        :(
        <CheckoutPresentation
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
        />)}
        
        </div>

    )
}