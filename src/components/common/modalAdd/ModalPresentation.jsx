import { Link } from "react-router-dom"
import { capitalFirstChar } from "../../../adapters/productsAdapter";
import { useContext,useState } from "react";
import { CartContext } from "../../../context/CartContext";

export default function ModalAddPresentation ( {product, closeModal}  ){  
    
	const { cart } = useContext(CartContext)
  const hasProduct= cart.some( (productCart) => productCart.id === product.id)

    return(
			<div className="modalView">
				<div className="modalContainer">
          { !hasProduct
          ? <div className="itemAdd">
            	<h5>
								<span>Producto Agregado a tu carro</span>
							</h5>
							<div className="infoItemAdd">
								<img src={product.image} alt={product.id} width={100}/>
								<p> { capitalFirstChar(product.category) }  { capitalFirstChar(product.trade) }  { capitalFirstChar(product.type) } x { product.pack }
								{ product.unity } - { product.volumen } </p>
								<p> {`S/. ${product.priceReg}`} </p>
							</div> 
      			</div>
        	: <div className="hasProductinCart">
							<p>Ya existe este producto en tu carro ... !</p>
						</div>
					}
					<div className ='finishAddProducts'>
						<Link to='/cart' ><button onClick={closeModal}>Ir al carro</button></Link>
						<Link to='/' onClick={closeModal} className="backStart">Seguir Comprando</Link>
      		</div>					
				</div>
    	</div> 
    )
}
