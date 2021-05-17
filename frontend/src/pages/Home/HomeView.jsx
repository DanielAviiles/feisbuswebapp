import React from 'react';
import Sidenav from './components/Sidenav';
import Card from '../../components/Card';

import '../../assets/css/globaleStyles.css';
import SideNavBox from './components/SideNavBox';

const HomeView = ({ datauser, posteos }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 container-scroll-global">
          <Sidenav info={datauser} />
          <hr/>
        </div>
        <div className="col-6">
          <div className="row d-flex justify-content-center container-dashboard">
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
        <div className="col-3 container-scroll-global">
          <SideNavBox datauser={datauser}/>
        </div>
      </div>
    </div>
  )
}

export default HomeView
