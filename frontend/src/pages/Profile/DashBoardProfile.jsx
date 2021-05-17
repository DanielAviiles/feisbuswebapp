import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/globaleStyles.css';
import ContainerNameProfile from './components/ContainerNameProfile';

const { REACT_APP_API } = process.env;
const endPointLogged = `${REACT_APP_API}/aboutuser`;

const DashBoardProfile = ({ userLoged, posts, history }) => {
  const [userInfo, setUserInfo] = useState({});
  const [posteos, setPosteos] = useState(null);
  const [loading, setLoading] = useState(true);
  const { concatName } = useParams();

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
    <>
      <div className="rq0escxv l9j0dhe7 du4w35lb">
        <div className="du4w35lb l9j0dhe7 cbu4d94t j83agx80">
          <div className="j83agx80 cbu4d94t l9j0dhe7 jgljxmt5 be9z9djy">
            <div className="j83agx80 cbu4d94t d6urw2fd dp1hu0rb l9j0dhe7 du4w35lb">
              <div className="j83agx80 cbu4d94t dp1hu0rb">
                <div className="j83agx80 cbu4d94t buofh1pr dp1hu0rb hpfvmrgz">
                  <div className="l9j0dhe7 dp1hu0rb cbu4d94t j83agx80" role="main">

                    <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip owycx6da btwxx1t3 cddn0xzi">
                      <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz rj1gh0hx buofh1pr">
                        <div className="k4urcfbm l9j0dhe7 datstx6m">
                          <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip owycx6da btwxx1t3">
                            <div className="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 ni8dbmo4 stjgntxs">
                              <div className="do00u71z l9j0dhe7 k4urcfbm add-style">
                                <div className="gs1a9yip ow4ym5g4 auili1gw j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd 
                                    oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys
                                    du4w35lb i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                                  <img src="https://img1.wsimg.com/isteam/stock/56497/:/" alt="portada"
                                      className="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 datstx6m k4urcfbm" />
                                </div>
                                <div className="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 jge66auo"></div>
                              </div>
                              <div className="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 jge66auo"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <ContainerNameProfile fullname={
                      (loading) ? 'Cargando ...' : `${userInfo.nombres} ${userInfo.apellidos}` } />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoardProfile
