import React from 'react'
import useFetch from '../../../../../hooks/useFetch'

const RadioBtnGen = () => {
  const state = useFetch('http://localhost:4000/api/service/authentication/info-generos');
  console.log(state);
  return (
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="genero" id="inlineRadio1" value="option1"></input>
      <label className="form-check-label">1</label>
    </div>
  )
}

export default RadioBtnGen
