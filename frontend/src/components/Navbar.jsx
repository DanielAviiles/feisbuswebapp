import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const imgNav = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg';

const Navbar = () => {
  const history = useHistory();
  const { user: { userLogin }, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({
      type: types.logout
    });
    history.replace('/login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href="/">
            <img src={imgNav} alt="logo" width="35"/>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{userLogin}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Action
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#a">Action</a></li>
              <li><a className="dropdown-item" href="#a">Another action</a></li>
              <li><a className="dropdown-item" href="#a">Something else here</a></li>
              <li><button className="btn" onClick={handleLogout}>Cerrrar sesión</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
