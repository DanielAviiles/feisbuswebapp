import React from 'react';
import Sidenav from './components/Sidenav';
import Card from '../../components/Card';

import '../../assets/css/globaleStyles.css';

const HomeView = ({ datauser, posteos }) => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Sidenav info={datauser} />
          <hr/>
        </div>
        <div className="col-6">
          <div className="row container-card-global d-flex justify-content-center">
            {
              (posteos != null)
                ? (posteos.map((item, idx) => (
                  <div className="mb-4" key={idx}>
                    <Card datauser={datauser} dataPost={item}/>
                  </div>
                )))
                : (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>)
                
            }
          </div>
        </div>
        <div className="col-3 bg-success">
          <h1>Hola mundo</h1>
        </div>
      </div>
    </>
  )
}

export default HomeView
