import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import '../assets/css/globaleStyles.css';
import BtnGroup from './BtnGroup';

const imgNav = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg';
const fgImg = 'https://img.icons8.com/material-outlined/50/8C8C8C/facebook-gaming.png';

const Navbar = ({dataUser}) => {
  const history = useHistory();
  const { /* user: { userLogin }, */ dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({
      type: types.logout
    });
    history.replace('/login');
  }

  const toProfile = () => {
    let frstName = (dataUser.nombres).split(' ');
    let sndName = (dataUser.apellidos).split(' ');
    history.replace(`/profile/${(frstName[0]).toLowerCase()}.${(sndName[0]).toLowerCase()}_${dataUser.id}`);
  }

  return (
    <>
      <nav className="navbar sticky-nav navbar-expand-lg navbar-light bg-light nav-shadow-da">
        <div className="container-fluid">
          <a className="navbar-brand p-0 ms-2 me-2 " href="/">
            <img src={imgNav} alt="logo" className="perso-logo-da"/>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="input-grup d-flex">
                  <div className="input-group-text group-input-da">
                    <i className="fas fa-search color-icons-nav-da"></i>
                  </div>
                  <input type="text" className="form-control input-addons-perso-da" placeholder="Buscar en Facebook"/>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-center ms-5 mb-lg-0">
              <li className="nav-item ms-3 me-5 border-primary border-bottom border-4 rounded">
                <button className="btn" onClick={() => history.replace('/dashboard')}>
                  <i className="fas fa-home fs-3 ms-2 text-primary"></i>
                </button>
              </li>
              <li className="nav-item me-5">
                <button className="btn">
                  <i className="far fa-tv fs-3 color-icons-nav-da"></i>
                </button>
              </li>
              <li className="nav-item me-5">
                <button className="btn">
                  <i className="fas fa-store fs-3 color-icons-nav-da"></i>
                </button>
              </li>
              <li className="nav-item me-5">
                <button className="btn">
                  <div className="border border-3 border-color-nav-da rounded-circle">
                    <i className="fas fa-users fs-5 color-icons-nav-da p-1"></i>
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn">
                  <img src={fgImg} width="32" alt="FG"/>
                </button>
              </li>
            </ul>
          </div>
          
          <div className="ps-4">
            <div className="btn-group me-3">
              <button className="btn rounded-pill" onClick={toProfile}>
                <img src={dataUser.imgUrlPerfil} width="35" alt="profileimg" className="rounded-circle"/>
                <strong className="ms-2">{ dataUser.nombres }</strong>
              </button>
            </div>
            <BtnGroup iconBtn="fas fa-th"/>
            <BtnGroup iconBtn="fab fa-facebook-messenger"/>
            <BtnGroup iconBtn="fas fa-bell" />
            <div className="btn-group">
              <button type="button" className="btn btn-color-feisbus-da rounded-circle ms-2"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-sort-down"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end mt-3">
                <li><a className="dropdown-item" href="#a">Action</a></li>
                <li><a className="dropdown-item" href="#a">Another action</a></li>
                <li><a className="dropdown-item" href="#a">Something else here</a></li>
                <li><button className="btn" onClick={handleLogout}>Cerrrar sesión</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
