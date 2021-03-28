import React from 'react';
import Modalregister from './components/Modalregister/Modalregister';
import './LoginView.css';

const LoginView = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5 align-items-center">

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

        <div className="col-4 mt-5">
          <div className="row justify-content-center">
            <div className="card card-login p-0">
              <div className="card-body">
                <div className="col-12">
                  <input type="text" className="form-control input-login-card mb-3" placeholder="Correo electrónico o número de telefono"/>
                  <input type="password" className="form-control input-login-card" placeholder="Contraseña"/>
                  <div className="mb-3 row">
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-sesion-da text-white">
                    Iniciar sesión
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center my-3">
                  <a href="/#" className="link-forgot-passwd">¿Olvidaste tu contraseña?</a>
                </div>
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
