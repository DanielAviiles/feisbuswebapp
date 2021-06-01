import React from 'react';
import '../assets/css/globaleStyles.css';
import '../assets/css/globalStyle2.css';

const Card = ({ datauser, dataPost, typeCard = 'standar' }) => {
  return (
    <div className="card p-0 border-0 card-style-global">
      {
        (typeCard === 'standar') && (
          <div className="card-header">
            <div className="row">
              {
                (typeCard === 'standar') && (
                  <>
                    <div className="col-1">
                      <img src={datauser.imgUrlPerfil} alt="user" width="45" className="rounded-circle"/>
                    </div>
                    <div className="col-10 ps-4 pt-2">
                      <h6 className="card-title">{datauser.nombres} {datauser.apellidos}</h6>
                    </div>
                    <div className="col-1 p-0">
                      <div className="btn-group">
                        <button type="button" className="btn rounded-circle btn-options-card"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-h"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end mt-2">
                          <li><a className="dropdown-item" href="#a">Proxiamamente</a></li>
                          <li><a className="dropdown-item" href="#a">mas acciones</a></li>
                        </ul>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
            {
              (typeCard === 'standar') && (
                (dataPost.descripcion != null) && (
                  <div className="row mt-2">
                    <p className="mb-0">{dataPost.descripcion}</p>
                  </div>)
              )
            }
          </div>
        )
      }
      {
        (typeCard === 'standar') && (
          (dataPost.urlimg != null) && (
            <img src={dataPost.urlimg} alt="react" />
          )
        )
      }
      <div className={(typeCard === 'filter') ? "card-body p-0" : "card-body"}>
        {
          (typeCard === 'standar') && (
            <div className="row px-2">
              <hr className="m-0" />
              <div className="btn-group" role="group">
                <button className="btn btn-options-card">
                  <i className="far fa-thumbs-up pe-2"></i>
                  Me gusta
                </button>

                <button className="btn btn-options-card">
                  <i className="far fa-comment-alt pe-2"></i>
                  Comentar
                </button>

                <button className="btn btn-options-card">
                  <i className="fas fa-share pe-2"></i>
                  Compartir
                </button>
              </div>
              <hr />
            </div>
          )
        }
        {
          (typeCard === 'postear') && (
            <>
              <div className="row px-2">
                <div className="col-1">
                  <img src={datauser.imgUrlPerfil} alt="user" width="45" className="rounded-circle"/>
                </div>
                <div className="col-11 pe-0">
                  <div className="block-btn">
                    <button type="button" className="btn btn-input-postear ms-3" data-bs-toggle="modal" 
                      data-bs-target="#postearModal">
                      ¿Qué estás pensando, {datauser.nombres}?
                    </button>
                  </div>
                </div>
              </div>

              <div className="row px-2">
                <hr className="my-2" />
                <div className="btn-group" role="group">
                  <button className="btn btn-options-card">
                    <i className="icon-stream-fb"></i>
                    <strong className="text-muted ps-2">Video en vivo</strong>
                  </button>

                  <button className="btn btn-options-card">
                    <i className="icon-foto-video-fb"></i>
                    <strong className="text-muted ps-2">Foto/video</strong>
                  </button>
                </div>
              </div>
            </>
          )
        }
        {
          (typeCard === 'filter') && (
            <>
              <div className="row pt-3 px-3">
                <strong className="fs-5 ps-2 pe-0" style={{flexDirection: 'column', width: '148px'}}>Publicaciones</strong>
                <div style={{flexDirection: 'column', width: '340px', padding: '0'}}>
                  <button className="btn btn-da-card-fb me-3" type="button">
                    <i className="icon-filter me-2" data-visualcompletion="css-img"></i>
                    <strong style={{fontSize: '15px'}}>Filtros</strong>
                  </button>
                  <button className="btn btn-da-card-fb" type="button">
                    <i className="icon-pinion me-2" data-visualcompletion="css-img"></i>
                    <strong style={{fontSize: '15px'}}>Administrar publicaciones</strong>
                  </button>
                </div>
              </div>
              <hr style={{margin: "8px 0 2px"}} />
              <div className="askdalskdjjalskdj209384" role="tablist">
                <div className="lkjajsldak019284">
                  <button className="kjalskjaoo093824" role="tab" tabIndex="0">
                    <div className="alksjlaksl2i3lkdieq">
                      <i className="icon-lista-fb-btn"></i>
                      <span className="lkaflakjf--23i">Vista de lista</span>
                      <div className="selector-azul"></div>
                    </div>
                  </button>
                </div>
                <div className="lkjajsldak019284">
                  <button className="kjalskjaoo093824" role="tab" tabIndex="0">
                    <div className="alksjlaksl2i3lkdieq">
                      <i className="icon-square-fb-btn"></i>
                      <span className="lkaflakjf--24i">Vista de cuadrícula</span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Card
