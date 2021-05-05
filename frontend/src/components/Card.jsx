import React from 'react';
import '../assets/css/globaleStyles.css';

const Card = ({ datauser, dataPost }) => {
  console.log(dataPost);
  return (
    <div className="card p-0 border-0 card-style-global">
      <div className="card-header">
        <div className="row">
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
        </div>
        {
          (dataPost.descripcion != null)
          && (
            <div className="row mt-2">
              <p className="mb-0">{dataPost.descripcion}</p>
            </div>)
        }
      </div>
      {
        (dataPost.urlimg != null)
        && (
          <img src={dataPost.urlimg} alt="react" />
        )
      }
      <div className="card-body">
        <p>
          Texto que puede ir por aca
        </p>
      </div>
    </div>
  )
}

export default Card
