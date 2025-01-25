import { useParams } from "react-router-dom";
import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";
import useGetProduct from "../../../hook/useGetProduct";
import productsAdapter from "../../../adapters/productsAdapter";
import Loader from "../../common/loader/Loader";
import ItemCount from "../../common/itemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.scss'



export function ItemDetail({className='itemFilter'}) {

  const { productList, error, loading} = useGetProduct()
  const { idProduct } = useParams();
  const [showItemCount,  setShowItemCount] = useState (true)
  const { addProduct } = useContext(CartContext)

  const findedProduct = productList.filter(
    (product) => product.id.toLowerCase() === idProduct.toLowerCase()
  );
 console.log(findedProduct)
  const adaptedProductList = productsAdapter( findedProduct ); 

  const addProductInCart =(count)=>{
    const productCart ={ ...findedProduct[0], quantity : count}
    setShowItemCount(false)
    addProduct(productCart )
  }

  return (
    loading ? <Loader/>:
    <div className={className}>

     { adaptedProductList.length > 0 

      ? ( adaptedProductList.map( ( product ) => (

        <div key ={product.id} className='containerItem'>
          <h5 className='productTitle'>
              { product.category } - { product.trade } - { product.type } x { product.pack }{" "}
              { product.unity } - { product.volumen }
          </h5>
          <div className='containerInfo'>
            <div className='infoItem'>
              <p> SKU: { product.id }</p>
              <p className='productPrice'>Precio : { product.price}</p>
              <p className='productPriceOnline'>Precio Online: { product.priceOnline }</p>
              <p className='productStock'>Stock: { product.stock } </p> 
            </div>

            <div className='containerImageItem'>
              <img src={product.image} alt={product.id} />
            </div>
          </div>
          {showItemCount
          ?<ItemCount stock= {product.stock} addProductInCart={addProductInCart}/>
          :(<Link to="/cart" ><button>Terminar mi compra</button></Link>)}

        
     </div>
        ))) 

      : <p>No se encontraron productos en esta categoría.</p>}
      </div>
  );
}