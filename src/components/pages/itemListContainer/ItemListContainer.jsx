import useGetProduct from '../../../hook/useGetProduct';
import ItemGeneric from '../../common/itemGeneric/ItemGeneric'
import Loader from '../../common/loader/Loader';

export default function ItemListContainer () {
    const {productList, error, loading} = useGetProduct()

    return (
          loading
          ?<Loader/>:
          <ItemGeneric productList = {productList}/>
          );
};