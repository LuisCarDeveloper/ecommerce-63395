import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { capitalFirstChar } from "../../../adapters/productsAdapter";
import './Checkout.scss'
export default function CheckoutPresentation({ dataForm, handleChangeInput, handleSubmit}){
    
    const {cart, totalPrice,totalQuantity,deleteCart} = useContext(CartContext)
    
    return (
        <div className='checkoutContainer' >

            <form className='formContainer' id="checkoutForm" onSubmit={(e)=>{ deleteCart(); handleSubmit(e)} }>
                <h4>Datos Comprador</h4>
                <input type='text' placeholder="Juan Perez Rodriguez" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} required/>
                <input type='tel' placeholder="+51 955562221" value={dataForm.phone} name="phone" onChange={handleChangeInput} required/>
                <input type='email' placeholder="lucho_cardenas@hotmail.com" value={dataForm.email} name="email" onChange={handleChangeInput} required/>
            </form>
           
            <div className="orderDetail">
                <h3>Detalle Orden <span>{`( ${totalQuantity()} productos )`}</span></h3>
                <ul>
                {cart.map( (productCart)=> (
                    <li key={productCart.id}>
                        <img src={productCart.image} alt={productCart.id} width={100}/>
                        <p> { capitalFirstChar(productCart.category) }  { capitalFirstChar(productCart.trade) }  { capitalFirstChar(productCart.type) } x { productCart.pack }
                            { productCart.unity } - { productCart.volumen }</p>
                        <p>{`S/. ${productCart.priceReg}`} </p>
                        <p>Cantidad :{` ${productCart.quantity}`}</p>
                        <p>Monto: S/. {parseFloat(productCart.priceReg*productCart.quantity).toFixed(2)} </p>
                    </li>
                ) )}            
                </ul>
                <div className="resumeBuy">
                    <h4>Precio Total: S/. {totalPrice().toFixed(2)}</h4>
                </div>
            </div>

            <div className="buttons">
                <button type="submit" form="checkoutForm"> Enviar Orden</button>
                <Link to="/cart"><button > Cancelar Orden</button></Link>
            </div>

        </div> 
        )
    }


