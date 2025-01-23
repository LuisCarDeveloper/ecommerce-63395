import { useParams } from "react-router-dom";

import useGetProduct from "../../../hook/useGetProduct";
import productsAdapter from "../../../adapters/productsAdapter";

import Loader from "../../common/loader/Loader";
import { ListContainerFilterPresentation } from "./ListContainerFilterPresentation";


export function ListContainerFilter(  ) {

  const{ productList, error, loading } = useGetProduct()
  const { idCat } = useParams()

  const filteredProductList = productList.filter(
      (product) => product.category === idCat)

  const adaptedProductList = productsAdapter(filteredProductList)

  return (
    loading? <Loader/>:
    <div >
      { adaptedProductList.length > 0 
        ? <ListContainerFilterPresentation productList={adaptedProductList}/> 
        : (<p>No se encontraron productos en esta categoría.</p>)
        
      }
    </div>
  );
}