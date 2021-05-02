import React from 'react';
import Sidenav from './components/Sidenav';

const HomeView = ({datauser}) => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Sidenav info={datauser} />
          <hr/>
        </div>
        <div className="col-6 bg-secondary">
          <h1>Hola mundo</h1>
        </div>
        <div className="col-3 bg-success">
          <h1>Hola mundo</h1>
        </div>
      </div>
    </>
  )
}

export default HomeView
