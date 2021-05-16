import React from 'react';
import { Link } from 'react-router-dom';
import { elementsSideNav } from '../../../assets/data/listSideNav';
import '../../../assets/css/globaleStyles.css';

const endpointIMG = 'https://static.xx.fbcdn.net/rsrc.php/v3';

const Sidenav = ({ info }) => {
  const toProfile = () => {
    let frstName = (info.nombres)?.split(' ');
    let sndName = (info.apellidos)?.split(' ');
    if (frstName === undefined) return '/profile/unknown';
    return `/profile/${(frstName[0]).toLowerCase()}.${(sndName[0]).toLowerCase()}_${info.id}`;
  }
  return (
    <nav className="nav flex-column mt-3 ms-0">
      <Link to={toProfile} className="nav-link text-dark font-size-side-nav">
        <img src={info.imgUrlPerfil} alt="img" width="30" className="rounded-circle me-3" />
        {info.nombres} {info.apellidos}
      </Link>
      {
        elementsSideNav.map((item, idx) => (
          <a className="nav-link text-dark font-size-side-nav" href="#s" key={idx}>
            <img src={`${endpointIMG+item.url}`} alt="covid"
              className="rounded-circle me-3" width="30" />
            {item.nombre}
          </a>
        ))
      }
      <a className="nav-link text-dark font-size-side-nav" href="#s">
        <button className="btn btn-sidenav-da py-1 px-2 rounded-circle me-3">
          <i className="fas fa-chevron-down"></i>
        </button>
        Ver más
      </a>
    </nav>
  )
}

export default Sidenav
