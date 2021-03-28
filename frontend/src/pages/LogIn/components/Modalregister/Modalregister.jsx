import React from 'react';
import './Modalregister.css';
import PopoverBtn from './components/PopoverBtn';
import DateSelect from './components/DateSelect';
import RadioBtnGen from './components/RadioBtnGen';
import Ref from './components/Ref';

const Modalregister = () => {
  const { REACT_APP_CONDI, REACT_APP_PDATOS, REACT_APP_PCOOKIES } = process.env;

  return (
    <div className="modal fade" id="exampleModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header pt-2 pb-0 align-items-baseline">
            <div className="row">
              <h3 className="modal-title" id="exampleModalLabel">Registrarte</h3>
              <p className="text-black-50">Es rápido y fácil</p>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="col-12 p-2">
              <div className="row mb-3">
                <div className="col-auto d-inline-flex">
                  <input type="text" placeholder="Nombre" className="form-control me-3 bg-inputs-da"/>
                  <input type="text" placeholder="Apellido" className="form-control bg-inputs-da"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="text" placeholder="Número de celular o correo electrónico"
                    className="form-control bg-inputs-da mb-3" />
                  <input type="password" placeholder="Contraseña nueva"
                    className="form-control bg-inputs-da mb-3" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-inline-flex">
                  <p className="fs-6 text-black-50 mb-0 me-2 font-info-da">Fecha de nacimiento</p>
                  <PopoverBtn />
                </div>
              </div>
              <div className="row mb-3">
                <DateSelect />
              </div>
              <div className="row">
                <div className="col-12 d-inline-flex">
                  <p className="fs-6 text-black-50 mb-0 me-2 font-info-da">Sexo</p>
                  <PopoverBtn />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <RadioBtnGen/>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-12">
                  <p className="msg-politics">
                    Al hacer clic en "Registrarte", aceptas nuestras <Ref url={REACT_APP_CONDI} contenido='Condiciones'/>,
                    la <Ref url={REACT_APP_PDATOS} contenido='Política de datos'/> y
                    la <Ref url={REACT_APP_PCOOKIES} contenido='Política de cookies'/>.
                    Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <button className="btn bg-color-da text-white" type="submit">Registrarte</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modalregister;
