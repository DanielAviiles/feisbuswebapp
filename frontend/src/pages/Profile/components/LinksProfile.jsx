import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'

const LinksProfile = ({ url = '#', textNav = 'Default' }) => {
  const { pathname } = useLocation();
  const [activeObj, setActiveObj] = useState(null);

  useEffect(() => {
    if (pathname === url) {
      setActiveObj(<div className="active-element-nav"></div>)
    } else {
      setActiveObj(null);
    }
  }, [pathname, url]);

  return (
    <NavLink exact to={url} className="style-nav-link-profile"
        activeClassName="text-active-nav-link" role="tab">
      <div className="asnckm492-cmas">
        <span className="text-nav-link" dir="auto">{textNav}</span>
        { activeObj }
      </div>
    </NavLink>
  )
}

export default LinksProfile
