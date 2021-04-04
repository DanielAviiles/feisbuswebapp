import { useEffect, useState } from "react"
import axios from 'axios';

const useAxios = (url, method, payload) => {
  if (url === null || url === undefined)
    throw Error('No se provee de un Url al cual consumir o no se pudo consumir correctamente');
  const [state, setState] = useState({ loading: true, data: null })

  useEffect(() => {
    switch (method) {
      case 'get':
        axios.get(url).then((respApi) => {
          const { data } = respApi;
          setState({ loading: false, data });
        });
        break;
      
      case 'post':
        axios.post(url, payload).then((respApi) => {
          const { data } = respApi;
          setState({ loading: false, data });
        });
        break;
    
      default:
        setState({
          loading: false, data: {
            status: 400, msg: 'Error! no se pudo realizar la peticion. Revise los parametros'
          }
        });
        break;
    }
    
  }, [url, method, payload]);

  return state;
}

export default useAxios
