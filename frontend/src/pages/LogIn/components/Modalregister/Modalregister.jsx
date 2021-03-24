import React from 'react';
import './Modalregister.css';

const Modalregister = () => {
  let days = [];
  for (let i = 0; i < 31; i++) { days.push(i+1); }
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
            <form className="row g-3">
              <div className="col-auto d-inline-flex">
                <input type="text" placeholder="Nombres" className="form-control me-3 bg-inputs-da"/>
                <input type="text" placeholder="Apellidos" className="form-control bg-inputs-da"/>
              </div>
              <div>
                <input type="email" placeholder="Correo electrónico" className="form-control bg-inputs-da"/>
              </div>
              <div>
                <input type="text" placeholder="Número de celular" className="form-control bg-inputs-da"/>
              </div>
              <div>
                <input type="password" placeholder="Contraseña nueva" className="form-control bg-inputs-da"/>
              </div>
              <div className="col-auto">
                <p className="fs-6 text-black-50">Fecha de nacimiento</p>
                <button className="btn btn-secondary btn-sm d-inline-flex">p</button>
              </div>
              <div className="col">
                <div className="col-auto">
                  <select name="dia" className="form-select">
                    { days.map((item, i) => (<option key={i}>{item}</option>)) }
                  </select>
                  <select name="mes" className="form-select">
                    { days.map((item, i) => (<option key={i}>{item}</option>)) }
                  </select>
                  <select name="year" className="form-select">
                    { days.map((item, i) => (<option key={i}>{item}</option>)) }
                  </select>
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
