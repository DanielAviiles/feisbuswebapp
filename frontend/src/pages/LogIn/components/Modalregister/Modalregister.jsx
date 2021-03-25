import React from 'react';
import './Modalregister.css';
import PopoverBtn from './components/PopoverBtn';
import DateSelect from './components/DateSelect';

const Modalregister = () => {
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

            <form className="col-12">
              <div className="row mb-3">
                <div className="col-auto d-inline-flex">
                  <input type="text" placeholder="Nombres" className="form-control me-3 bg-inputs-da"/>
                  <input type="text" placeholder="Apellidos" className="form-control bg-inputs-da"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="email" placeholder="Correo electrónico" className="form-control bg-inputs-da mb-3"/>
                  <input type="text" placeholder="Número de celular" className="form-control bg-inputs-da mb-3"/>
                  <input type="password" placeholder="Contraseña nueva" className="form-control bg-inputs-da mb-3"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-inline-flex">
                  <p className="fs-6 text-black-50 me-2">Fecha de nacimiento</p>
                  <PopoverBtn />
                </div>
              </div>
              <div className="row mb-3">
                <DateSelect />
              </div>
              <div className="row">
                <div className="col-12 d-inline-flex">
                  <p className="fs-6 text-black-50 me-2">Sexo</p>
                  <PopoverBtn />
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
