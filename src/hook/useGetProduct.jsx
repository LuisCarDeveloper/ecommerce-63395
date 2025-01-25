import { useEffect, useState } from 'react';
import { getProduct } from '../helpers/getProduct';

export default function useGetProduct () {

  const [ productList, setProductList ] = useState( [] )
  const [ error, setError] = useState()
  const [ loading, setLoading] = useState( true )

  useEffect( () => {
      setLoading( true )
      getProduct()
      .then((products)=>{setProductList( products )})
      .catch( (error)=>{
        setError( error )})
      .finally( ()=> {setLoading( false )})
    }, [getProduct] )

    return { productList, error, loading }
      
  }

