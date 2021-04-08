import React, { forwardRef, useImperativeHandle, useState } from 'react'
import useFetch from '../../../../../hooks/useFetch'

const { REACT_APP_API } = process.env;

const RadioBtnGen = forwardRef((props, ref) => {
  const state = useFetch(`${REACT_APP_API}/authentication/info-generos`);
  const [genero, setGenero] = useState(null);

  const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const handleInputChanged = ({ target }) => setGenero(target.value);
  useImperativeHandle(ref, () => ({ getGenero: () => genero }), [genero]);

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
              <div className={`form-check border border-dark-50 rounded p-0 ${(i !== 2) && 'me-3'}`} key={i}>
                <div className="p-2">
                  <label className="form-check-label ms-1 me-5">{toCapitalize(item.nombre)}</label>
                  <input className="form-check-input float-end" type="radio"
                    name="genero" id={`inlineRadio${i}`} value={item.id}
                    onChange={handleInputChanged}/>
                </div>
              </div>
            ))
          )
      }
    </>
  )
});

export default RadioBtnGen
