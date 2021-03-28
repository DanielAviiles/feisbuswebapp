import React from 'react'
import '../Modalregister.css';

const PopoverBtn = ({ contenido  = 'Nada'}) => {

  return (
    <button className="d-inline-flex questionBtnPopover"
      data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right"
      data-bs-content={contenido} type="button">
        <strong>?</strong>
    </button>
  )
}

export default PopoverBtn
