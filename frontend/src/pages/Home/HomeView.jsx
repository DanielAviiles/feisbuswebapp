import React from 'react';
import Sidenav from './components/Sidenav';
import Card from '../../components/Card';

import '../../assets/css/globaleStyles.css';
import SideNavBox from './components/SideNavBox';

const HomeView = ({ datauser, posteos }) => {
  return (
    <div className="container-fluid">
      <div className="container-padre">
        <div className="container-hijo contenido-lateral">
          <Sidenav info={datauser} />
          <hr/>
        </div>
        <div className="contenido-central">
          <div className="content-interno container-dashboard">
            <div className="mb-4">
              <Card datauser={datauser} typeCard="postear" />
            </div>
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
        <div className="container-hijo contenido-lateral">
          <SideNavBox datauser={datauser}/>
        </div>
      </div>
    </div>
  )
}

export default HomeView
