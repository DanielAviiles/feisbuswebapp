import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch, useLocation, useParams } from 'react-router-dom';
import ContainerNameProfile from './components/ContainerNameProfile';
import PortadaBackground from './components/PortadaBackground';
import Separador from './components/Separador';
import NavLink from './components/NavLink';
import PostsProfile from './Pages/PostsProfile';
import AboutProfile from './Pages/AboutProfile';

import '../../assets/css/globaleStyles.css';
import '../../assets/css/globalStyle2.css';
import '../../assets/css/FeisStyle.css';

const { REACT_APP_API , REACT_APP_IMG_PORTADA} = process.env;
const endPointLogged = `${REACT_APP_API}/aboutuser`;
const imgLoadingProfile = 'http://www.esivalladolid.com/wp-content/uploads/2017/11/default2-1.jpg';

const DashBoardProfile = ({ userLoged = null, posts, history }) => {
  const [userInfo, setUserInfo] = useState({});
  const [posteos, setPosteos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const { concatName } = useParams();
  const location = useLocation();

  console.log('Posteos: ',posteos); // TODO: quitar pronto

  const consumeData = useCallback(async () => {
    try {
      const infoLink = concatName.split('_');
      const { data } = await axios.get(`${endPointLogged}/${infoLink[1]}`);
      if (data.dataUser.length === 0) history.replace('/dashboard');
      setUserInfo(data.dataUser[0]);
      setPosteos(data.posteos);
      setIsEdit(false);
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
      console.log('Mas de 2 caracteres');
      history.replace('/dashboard');
      return;
    }
    if (userLoged !== null) {
      if (isNaN(parseInt(infoLink[1], 10))) {
        history.replace('/dashboard');
        return;
      }
      if (parseInt(userLoged.id, 10) !== parseInt(infoLink[1], 10))
        consumeData();
      else {
        setUserInfo(userLoged);
        setPosteos(posts);
        setLoading(false);
      }
    }
  }, [userLoged, posts, concatName, history, consumeData]);

  return (
    <div className="rq0escxv du4w35lb">
      <div className="du4w35lb cbu4d94t j83agx80">
        <div className="j83agx80 cbu4d94t jgljxmt5 be9z9djy">
          <div className="j83agx80 cbu4d94t d6urw2fd dp1hu0rb du4w35lb">
            <div className="j83agx80 cbu4d94t dp1hu0rb">
              <div className="j83agx80 cbu4d94t buofh1pr dp1hu0rb hpfvmrgz">
                <div className="dp1hu0rb cbu4d94t j83agx80" role="main">
                  <div className="div-container-profile">

                    <PortadaBackground urlImg={(loading)
                      ? REACT_APP_IMG_PORTADA
                      : (userInfo.img_portada !== null)
                        ? userInfo.img_portada
                        : REACT_APP_IMG_PORTADA}
                      isEdit={isEdit} />
                    
                    <ContainerNameProfile fullname={
                      (loading) ? 'Cargando ...' : `${userInfo.nombres} ${userInfo.apellidos}`}
                      imgProfile={(loading) ? imgLoadingProfile : userInfo.imgUrlPerfil}
                      isEdit={isEdit} />

                  </div>

                  <Separador />
                  <div className="cmemclpsozxz"></div>
                  <NavLink />

                  <div className="container-elements-of-nav-link">

                    <div className="fst-obj-cont">
                      <div className="alskjall32847kdjla">
                        <div className="sajljoir93884lkj"></div>
                      </div>
                    </div>
                    <div className="snd-obj-cont">
                      <Switch>
                        <Route exact path={location.pathname}
                          render={(props) => <PostsProfile {...props} />} />
                        <Route exact path={`${location.pathname}/about`}
                          render={(props) => <AboutProfile {...props} />}/>
                      </Switch>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardProfile
