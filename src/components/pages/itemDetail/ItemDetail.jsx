import { useParams } from "react-router-dom";
import { useContext,useState } from "react";
import { CartContext } from "../../../context/CartContext";
import useGetProduct from "../../../hook/useGetProduct";
import Loader from "../../common/loader/Loader";
import ItemCount from "../../common/itemCount/ItemCount";
import ItemView from "../../common/itemView/ItemView";

import './ItemDetail.scss';

export function ItemDetail() {
  const { productList, error, loading} = useGetProduct()
  const { idProduct } = useParams();
  const { addProduct } = useContext(CartContext)


  const findedProduct =  productList.filter(
    (product) => product.id.toLowerCase() === idProduct.toLowerCase()
    
  );

  const addProductInCart = (count)=>{
    const productCart ={ ...findedProduct[0], quantity : count}
    addProduct(productCart )
  }


  return (
    loading 
    ? <Loader/>
    : <div  >
      { findedProduct.length > 0 
        ? ( <div className = 'itemFilter'>
              <ItemView 
              product = { findedProduct } 
              childAddProduct = {
                <ItemCount stock = { findedProduct[0].stock } addProductInCart = { addProductInCart } product={findedProduct[0]}/> 
                } 
              />
            </div>) 
        : <p>No se encontraron productos en esta categoría.</p>}
     </div>
    );
  }