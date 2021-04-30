
import React from 'react';
import '../assets/css/globaleStyles.css';

const BtnGroup = ({iconBtn}) => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-color-feisbus-da rounded-circle ms-2"
        data-bs-toggle="dropdown" aria-expanded="false">
        <i className={iconBtn}></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end mt-3">
        <li><a className="dropdown-item" href="#a">Proximamente</a></li>
        <li><a className="dropdown-item" href="#a">Mas opciones</a></li>
      </ul>
    </div>
  )
}

export default BtnGroup
