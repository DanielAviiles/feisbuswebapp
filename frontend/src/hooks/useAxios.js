import { useEffect, useState } from "react"
import axios from 'axios';

/* 
  Implementado unicamente para peticiones GET
  por el momento
*/
const useFetch = (url) => {
  if (url === null || url === undefined)
    throw Error('No se provee de un Url al cual consumir o no se pudo consumir correctamente');
  const [state, setState] = useState({ loading: true, data: null })
  
  useEffect(() => {
    axios.get(url).then((respApi) => {
      const { data } = respApi;
      setState({ loading: false, data })
    });
  }, [url]);

  return state;
}

export default useFetch
