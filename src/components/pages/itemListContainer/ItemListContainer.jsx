import ItemListContainerPresentation from './ItemListContainer.Presentation';
import useGetProduct from '../../../hook/useGetProduct';
import Loader from '../../common/loader/Loader';
import './ItemListContainer.scss'

export default function ItemListContainer () {

    const {productList, error, loading} = useGetProduct()
    
    return (
          loading
          ?<Loader/>:
          <ItemListContainerPresentation productList = { productList } />
        );
};