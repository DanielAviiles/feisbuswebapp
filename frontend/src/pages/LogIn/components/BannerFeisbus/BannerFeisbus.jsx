import React from 'react'
import '../../LoginView.css';

const BannerFeisbus = () => {
  return (
    <div className="col-6 mx-5">
      <div className="ms-5">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          className="img-feisbus-da col-auto"
          alt="feisbus" />
        <h2 className="msg-bnd-da ms-4 col-auto">
          Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
        </h2>
      </div>
    </div>
  )
}

export default BannerFeisbus
