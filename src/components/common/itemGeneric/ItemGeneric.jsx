import { Link } from "react-router-dom";
import productsAdapter from "../../../adapters/productsAdapter";
import './ItemGeneric.scss';

export default function ItemGeneric ( { productList } ) {
  
    const adaptedProductList= productsAdapter(productList)

    return (
        <div className = "containerFilter">
            { adaptedProductList.map( product => (
                <Link key = { product.id } to = { `/product/${product.id}` }>
                <div className ='filteredProducts'>
                    <h5 >{ product.category } - { product.trade } - { product.type } x { product.pack } { product.unity } { product.volumen } </h5>
                    <p className="priceItem">Precio: { product.price }</p>
                    <p >Precio Online: { product.priceOnline }</p>
                    <p >Stock: { product.stock } </p> 
                    <img src={product.image} alt={product.id} />
                </div>
                </Link>)) 
            }
        </div>           
    );
    };