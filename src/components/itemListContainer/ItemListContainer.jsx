import ItemListContainerPresentation from './ItemListContainer.Presentation';
import products from "../../mocks/products";
import useGetProduct from '../../hook/useGetProduct';
import Loader from '../loader/Loader';
import './ItemListContainer.scss'

export default function ItemListContainer () {

    const {productList, error, loading} = useGetProduct(products)
    
    return (
          loading
          ?<Loader/>:
          <ItemListContainerPresentation productList = { productList } />
        );
};