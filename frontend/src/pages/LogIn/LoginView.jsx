import React from 'react';
import BannerFeisbus from './components/BannerFeisbus/BannerFeisbus';
import FormLogin from './components/FomLogin/FormLogin';
import Modalregister from './components/Modalregister/Modalregister';
import './LoginView.css';

const LoginView = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5 align-items-center">
        <BannerFeisbus />
        <div className="col-4 mt-5">
          <div className="row justify-content-center">
            <div className="card card-login p-0">
              <div className="card-body">
                <FormLogin />
                <hr />
                <div className="row p-2">
                  <div className="col-12 d-flex justify-content-center">
                    <button type="button" className="btn btn-register-da text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Crear cuenta nueva
                    </button>
                    <Modalregister />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-center text-page-public">
                <strong>Crea una página</strong> para un personaje público, un grupo de música o un negocio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginView
