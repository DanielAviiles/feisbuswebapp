import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'

const LinksProfile = ({ url = '#', textNav = 'Default' }) => {
  const { pathname } = useLocation();
  return (
    <NavLink exact to={url} className="style-nav-link-profile"
        activeClassName="text-active-nav-link" role="tab">
      <div className="asnckm492-cmas">
        <span className="text-nav-link" dir="auto">{textNav}</span>
        { (pathname === url) && (<div className="active-element-nav"></div>) }
      </div>
    </NavLink>
  )
}

export default LinksProfile
