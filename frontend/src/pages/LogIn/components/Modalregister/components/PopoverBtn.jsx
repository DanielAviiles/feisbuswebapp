import React from 'react'
import '../Modalregister.css';

const PopoverBtn = ({ contenido  = 'Nada'}) => {

  return (
    <button className="btn btn-secondary btn-sm d-inline-flex rounded-circle questionBtn"
      data-bs-container="body" data-bs-toggle="popover"
      data-bs-placement="right" data-bs-content={contenido}
      type="button">
      <i className="fas fa-question"></i>
    </button>
  )
}

export default PopoverBtn
