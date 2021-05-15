import React from 'react';
import '../../../assets/css/globaleStyles.css';

const ImgAdvice = 'https://azurecomcdn.azureedge.net/cvt-02fe7c8f73be7794706db3d3c7016ff260d7c3786cb96c5c0002b2c9c4c9d978/images/page/services/devops/hero-images/index-hero.jpg';

const SideNavBox = () => {
  return (
    <div className="mt-3 container-scroll-global">
      <strong className="text-muted">Publicidad</strong>
      <div className="card mb-3 border-0 bg-transparent mt-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ImgAdvice} alt="azure" className="rounded" width="130"/>
          </div>
          <div className="col-md-8 ps-4">
            <div className="card-body">
              <p className="card-text">Cree una cuenta gratuita de Azure</p>
              <p className="card-text"><small className="text-muted">azure.microsoft.com</small></p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <strong className="text-muted">Cumpleaños</strong>
      <div className="card mb-3 border-0 bg-transparent mt-2">
        <div className="row g-0">
          <div className="col-md-1">
            <span><i className="icon-bithday-fb"></i></span>
          </div>
          <div className="col-md-11 ps-4">
            <div className="card-body p-0">
              Hoy es el cumpleaños de <strong>Robinson Villabon</strong>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="btn-toolbar justify-content-between" role="toolbar">
        <strong className="text-muted">Contactos</strong>

        <div className="btn-group" role="group" aria-label="First group">
          <button type="button" className="btn btn-options-card rounded-circle">
            <span><i className="icon-camera-chat"></i></span>
          </button>
          <button type="button" className="btn btn-options-card rounded-circle ms-2">
            <span><i className="icon-lupa-chat"></i></span>
          </button>
          <button type="button" className="btn btn-options-card rounded-circle ms-2">
            <span><i className="icon-options-chat"></i></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideNavBox
