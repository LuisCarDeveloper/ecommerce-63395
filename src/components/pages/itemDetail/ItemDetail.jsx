import { useParams } from "react-router-dom";

import products from "../../../mocks/products";
import useGetProduct from "../../../hook/useGetProduct";
import productsAdapter from "../../../adapters/productsAdapter";
import Loader from "../../common/loader/Loader";
import './ItemDetail.scss'



export function ItemDetail({className='itemFilter'}) {

  const { productList, error, loading} = useGetProduct( products )
  const { idProduct } = useParams();

  const findedProduct = productList.filter(
    (product) => product.id === idProduct
  );

  const adaptedProductList = productsAdapter( findedProduct ); 

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
              <img src={`/img/${product.id}.webp`} alt={product.id} />
            </div>
        </div>
        
     </div>
        ))) 

      : <p>No se encontraron productos en esta categoría.</p>}
      </div>
  );
}