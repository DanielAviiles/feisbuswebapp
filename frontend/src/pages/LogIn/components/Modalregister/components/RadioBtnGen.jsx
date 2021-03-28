import React from 'react'
import useFetch from '../../../../../hooks/useFetch'

const RadioBtnGen = () => {
  const state = useFetch(`${process.env.REACT_APP_API}/authentication/info-generos`);
  return (
    <>
      {
        (state.loading)
          ? (
            <div className="border border-dark-50 rounded col-12">
              <div className="p-2 text-center">
                <span><strong>No hay datos para renderizar</strong></span>
              </div>
            </div>
          )
          : (
            state.data.map((item, i) => (
              <div className="form-check form-check-inline border border-dark-50 rounded p-0" key={i}>
                <div className="p-2">
                  <label className="form-check-label me-5">{item.nombre}</label>
                  <input className="form-check-input float-end" type="radio"
                      name="genero" id={`inlineRadio${item.id}`} value={item.id}></input>
                </div>
              </div>
            ))
          )
      }
    </>
  )
}

export default RadioBtnGen
