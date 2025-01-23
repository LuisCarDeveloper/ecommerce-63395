import { Link } from "react-router-dom";
import productsAdapter from "../../../adapters/productsAdapter";


export default function Item ( { className, productList} ) {
  
    const adaptedProductList= productsAdapter(productList)

    return (
        <div className='containerFilter' >

            { adaptedProductList.map( product => (
                <Link key = { product.id } to = { `/product/${product.id}` }>
                <div className ='filteredProducts'>
                    <h5 className='productTitle'>{ product.category } - { product.trade } - { product.type } x { product.pack } { product.unity } { product.volumen } </h5>
                    <p className='productPrice'>Precio: { product.price }</p>
                    <p className='productPrice'>Precio Online: { product.priceOnline }</p>
                    <img src={`/img/${product.id}.webp`} alt={product.id} />
                </div>
                </Link>)) 
            }

        </div>           
    );
    };