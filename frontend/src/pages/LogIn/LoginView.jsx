import React from 'react'
import Modalregister from './components/Modalregister/Modalregister'

const LoginView = () => {
  return (
    <div className="container-fluid">
      <div className="p-5">
        <div className="mt-4 col-5">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Boton
          </button>
          <Modalregister />
        </div>
      </div>
    </div>
  )
}

export default LoginView
