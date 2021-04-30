import React from 'react';
import Sidenav from './components/Sidenav';

const HomeView = ({datauser}) => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <h1>Hola mundo</h1>
          <h1>{datauser.nombres}</h1>
          <Sidenav />
        </div>
        <div className="col-4">
          <h1>Hola mundo</h1>
        </div>
        <div className="col-4">
          <h1>Hola mundo</h1>
        </div>
      </div>
    </>
  )
}

export default HomeView
