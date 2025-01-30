import { useEffect, useState } from 'react';
import { getCategories } from '../helpers/getCategories';

export default function useGetCategories () {

  const [ categoryList, setCategoryList ] = useState([] )
  const [ error, setError] = useState()
  const [ loading, setLoading] = useState( true )

  useEffect( () => {
      setLoading( true )
      getCategories()
      .then((categories)=>{setCategoryList( categories)})
      .catch( (error)=>{
        setError( error )})
      .finally( ()=> {setLoading( false )})
    }, [] )

    return { categoryList, error, loading }
      
  }
