import React from 'react';
import { useLocation } from 'react-router';
import LinksProfile from './LinksProfile';
import SelectMenu from './SelectMenu';

const NavLink = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav-link-profile">
      <div className="container-nav-da">
        <div className="asjjxxmxmms">
          <div className="mcpsmnasxsam">
            <div className="nav-da-fb-profile">
              <div className="oowuemsalkmsa">
                <div className="mvjdurpa">

                  <div className="m1dskmsldc">
                    <div className="mpoi564mlka">
                      <div data-pagelet="ProfileTabs">
                        <div className="pmfj940ndjadd">
                          <div className="sdnnsoldkdk" role="tablist" data-visualcompletion="ignore-dynamic">
                            <div className="container-tab-links">
                              <div className="container-tab-links-2">
                                <SelectMenu />
                                <LinksProfile url={`${pathname}`} textNav="Publicaciones" />
                                <LinksProfile url={`${pathname}/about`} textNav="Información" />
                                <LinksProfile url={`${pathname}/amigos`} textNav="Amigos" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p2oevmlda">

                  </div>

                </div>
              </div>
            </div>
            <div className="btn-nav-da-fb-profile">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavLink
