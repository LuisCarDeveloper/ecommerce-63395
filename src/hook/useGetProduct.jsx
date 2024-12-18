import { useEffect, useState } from 'react';
import { getProductMock } from '../helpers/getProductMock';

export default function useGetProduct (products) {

  const [ productList, setProductList ] = useState( [] )
  const [ error, setError] = useState()
  const [ loading, setLoading] = useState( true )

  useEffect( () => {
      setLoading( true )
      getProductMock( products )
      .then(()=>{setProductList( products )})
      .catch( (error)=>{
        setError( error )})
      .finally( ()=> {setLoading( false )})
    }, [products] )

    return { productList, error, loading }
      
  }

