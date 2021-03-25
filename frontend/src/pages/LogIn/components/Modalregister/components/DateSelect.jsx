import React, { useState } from 'react'

const DateSelect = () => {
  const fullFecha = new Date();

  const [dateBorn, setDateBorn] = useState({
    dia: (fullFecha.getDate()).toString(),
    mes: (fullFecha.getMonth()).toString(),
    year: (fullFecha.getFullYear()).toString(),
  });
  const { dia, mes, year } = dateBorn;

  const moths = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  let dias = [];
  for (let i = 0; i < 31; i++) { dias.push(i + 1); }
  let years = []
  for (let i = 1901; i <= fullFecha.getFullYear(); i++) { years.push(i) }
  
  const handleChange = ({target}) => {
    setDateBorn({
      ...dateBorn,
      [target.name]: target.value
    });
  }

  return (
    <div className="col-12 d-inline-flex">
      <select className="form-select me-3" name="dia"
        value={dia} onChange={handleChange}>
        {
          dias.map((item, i) => (<option key={i} value={item}>{item}</option>))
        }
      </select>
      <select className="form-select me-3" name="mes"
        value={mes} onChange={handleChange}>
        { moths.map((item, i) => (<option key={i} value={i}>{item}</option>)) }
      </select>
      <select className="form-select" name="year"
        value={year} onChange={handleChange}>
        { years.map((item, i) => (<option key={i} value={item}>{item}</option>)) }
      </select>
    </div>
  )
}

export default DateSelect
