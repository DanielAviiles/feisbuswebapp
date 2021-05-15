import React from 'react';
import '../assets/css/globaleStyles.css';

const Card = ({ datauser, dataPost, typeCard = 'standar' }) => {
  // console.log(dataPost);
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
      <div className="card-body">
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
                  {/* <div className="d-grid gap-2">
                    <button className="btn btn-input-postear ms-3">
                      ¿Qué estás pensando, {datauser.nombres}?
                    </button>
                  </div> */}
                  <div className="block-btn">
                    <button className="btn btn-input-postear ms-3">
                      ¿Qué estás pensando, {datauser.nombres}?
                    </button>
                  </div>
                </div>
              </div>

              <div className="row px-2">
                <hr className="my-2" />
                <div className="btn-group" role="group">
                  <button className="btn btn-options-card">
                    <span className="mt-4 pe-2">
                      <i className="icon-stream-fb"></i>
                    </span>
                    <strong>Video en vivo</strong>
                  </button>

                  <button className="btn btn-options-card">
                    <span className="pe-2">
                      <i className="icon-foto-video-fb pe-2"></i>
                    </span>
                    <strong>Foto/video</strong>
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
