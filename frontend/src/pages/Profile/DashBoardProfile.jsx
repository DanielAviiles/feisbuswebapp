import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_API } = process.env;
const endPointLogged = `${REACT_APP_API}/aboutuser`;

const DashBoardProfile = ({ userLoged, posts, history }) => {
  const [userInfo, setUserInfo] = useState({});
  const [posteos, setPosteos] = useState(null);
  const [loading, setLoading] = useState(true);
  const { concatName } = useParams();

  console.log(posteos); // TODO: BORRAR DESPUES, ESTO NO SIVER ASI

  const consumeData = useCallback(async () => {
    try {
      const infoLink = concatName.split('_');
      const { data } = await axios.get(`${endPointLogged}/${infoLink[1]}`);
      if (data.dataUser.length === 0) history.replace('/dashboard');
      setUserInfo(data.dataUser[0]);
      setPosteos(data.posteos);
      setLoading(false);
    } catch (err) {
      console.warn(err);
    }
  }, [concatName, history]);

  useEffect(() => {
    const infoLink = concatName.split('_');
    if (infoLink.length <= 1) {
      history.replace('/dashboard');
      return;
    } else if (infoLink.length > 2) {
      history.replace('/dashboard');
      return;
    }
    if (userLoged.id !== infoLink[1]) consumeData();
    else {
      setUserInfo(userLoged);
      setPosteos(posts);
      setLoading(false);
    }
  }, [userLoged, posts, concatName, history, consumeData]);

  return (
    <div>
      { 
        (loading)
          ? (<h1>Cargando...</h1>)
          : (
            <>
              HOLA MUNDO <br />
              <pre>{userInfo.nombres}</pre>
            </>
          )
      }
    </div>
  )
}

export default DashBoardProfile
