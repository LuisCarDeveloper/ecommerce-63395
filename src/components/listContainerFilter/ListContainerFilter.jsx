import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import products from "../../mocks/products";
import productsAdapter from "../../adapters/productsAdapter";
import useGetProduct from "../../hook/useGetProduct";
import Loader from "../loader/Loader";
import './ListContainerFilter.scss'
import { useState, useEffect } from "react";



export function ListContainerFilter(  ) {

  const{ productList, error, loading } = useGetProduct( products )
  const { idCat } = useParams()

  const filteredProductList = productList.filter(
      (product) => product.category === idCat)

  const adaptedProductList = productsAdapter(filteredProductList)

  return (
    loading? <Loader/>:
    <div className='containerFilter'>
      { adaptedProductList.length > 0 
      
        ? (
          adaptedProductList.map((product) => 
            (
              <Link   key = { product.id } to = { `/product/${product.id}` }>
                <div className ='filteredProducts'>
                  <h5 className='productTitle'>
                    {product.category} - {product.trade} - {product.type} x {product.pack}{" "}
                    {product.unity} - {product.volumen}
                  </h5>
                  <p className='productPrice'>Precio: {product.price}</p>
                  <p className='productPrice'>Precio Online: {product.priceOnline}</p>
                  <img src={`/img/${product.id}.webp`} alt={product.id} />
                </div>
              </Link>
            )
          )
        ) 
        : (<p>No se encontraron productos en esta categoría.</p>)
        
      }
    </div>
  );
}