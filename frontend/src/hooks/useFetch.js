import { useEffect, useState } from "react"

/* 
  Implementado unicamente para peticiones GET
  por el momento
*/
const useFetch = (url) => {
  if (url === null || url === undefined)
    throw Error('No se provee de un Url al cual consumir o no se pudo consumir correctamente');
  const [state, setState] = useState({ loading: true, data: null })
  
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {'Access-Control-Allow-Origin': '*'}
    }).then(res => res.json())
      .then(data => {
        setState({
          loading: false,
          data
        })
      });
  }, [url]);

  return state;
}

export default useFetch
