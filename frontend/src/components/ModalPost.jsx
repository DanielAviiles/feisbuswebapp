import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

import '../assets/css/globalStyle2.css';

const { REACT_APP_API } = process.env;
const endPoint = `${REACT_APP_API}/aboutuser`;

const ModalPost = ({ userData }) => {
  const [privacidad, setPrivacidad] = useState([]);
  const [typePriv, setTypePriv] = useState(2);
  const [descripcion, setDescripcion] = useState('');

  const consumeData = useCallback(async () => {
    try {
      const { data: {typesPrivicy} } = await axios.get(`${endPoint}/typesprivicy`);
      setPrivacidad(typesPrivicy)
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    consumeData()
  }, [consumeData]);

  const handlePriv = ({ target }) => (setTypePriv(parseInt(target.value, 10)))
  const handleChange = ({ target }) => (setDescripcion(target.value))
  const toCamelCase = (string) => (string.charAt(0).toUpperCase() + string.slice(1))

  const publicPost = useCallback(async () => {
    try {
      const dataPost = {
        descripcion,
        perfil_id: userData.id,
        privacidad_id: typePriv
      }
      await axios.post(`${endPoint}/publicar_post`, dataPost)
        .then((resp) => {
          console.log(`DATA INSERTADA:::::: ${resp}`);
          window.location.reload();
      }).catch((resp) => console.error(resp));
    } catch (err) {
      console.warn(err);
    }
  }, [descripcion, typePriv, userData])

  return (
    <div className="modal fade" id="postearModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{borderRadius: "0.7rem"}}>
          <div className="modal-body p-0">
            <div className="content-title-modal">
              <div className="alskj--askdjla">
                <h5 className="modal-title" id="exampleModalLabel"
                  style={{ fontWeight: "600", fontFamily: "inherit", fontSize:"20px" }}>
                  Crear publicación
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>

            <div className="p-3">
              <div className="row">
                <div className="col-1">
                  <img src={userData.imgUrlPerfil} alt="user" width="40" className="rounded-circle"/>
                </div>
                <div className="col-10 ps-4">
                  <div className="row">
                    <h6 className="card-title mb-1">{userData.nombres} {userData.apellidos}</h6>
                  </div>
                  <div className="row" style={{paddingLeft: "12px"}}>
                    <select className="btn form-select py-1 fa select-menu-priv" aria-label=".form-select-lg example"
                      value={typePriv} onChange={handlePriv} >
                      {
                        privacidad.map((item) => (
                          <option key={item.id} value={item.id} className="fa" data-icon="fas fa-globe-americas">
                            {toCamelCase(item.nombre)}
                          </option>))
                      }
                    </select>
                  </div>
                </div>
              </div>

              <div className="row px-2 pt-3">
                <textarea className="form-control" placeholder={`¿Qué estás pensando, ${userData.nombres}?`} 
                  aria-label="With textarea" style={{ border: "0", fontSize: "1.5rem" }}
                  onChange={handleChange}></textarea>
              </div>

              <div className="row px-2 pt-4">
                <div className="col-6">
                  <img src="	https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" 
                    alt="Aa" width="40" />
                </div>
                <div className="col-6 aosojasjweiru"><i className="icon-caritafeliz-fb"></i></div>
              </div>

              <div className="row mt-3 mx-2 px-2 border" style={{border: "1px", borderRadius: "0.5rem"}}>
                <div className="col-6 p-3">
                  <strong>Agregar a tu publicación</strong>
                </div>
                <div className="col-6 px-0 pt-3">
                  <i className="icon-foto-video-fb"></i>
                  <i className="icon-etiqueta-fb ms-3"></i>
                  <i className="icon-caritafeliz-fb-post ms-3"></i>
                  <i className="icon-location-fb-da ms-3"></i>
                  <i className="icon-question-fa-da ms-2"></i>
                  <i className="icon-options-post ms-3"></i>
                </div>
              </div>

              <div className="d-grid gap-2 mt-3 mx-2">
                <button className="btn btn-primary" type="button"
                  disabled={(descripcion !== '') ? false : true}
                  onClick={publicPost}>Publicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPost
