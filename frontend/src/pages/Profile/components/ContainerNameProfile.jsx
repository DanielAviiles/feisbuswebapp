import React from 'react';

const ContainerNameProfile = ({ fullname, imgProfile, isEdit }) => {
  return (
    <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip owycx6da btwxx1t3 ihqw7lf3 cddn0xzi">
      <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u marjyy4e hpfvmrgz rj1gh0hx buofh1pr hv4rvrfc dati1w0a">
        <div className="cbu4d94t j83agx80">

          <div className="aovydwv3 o8rfisnq j83agx80 do00u71z tr9rh885">
            <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd gs1a9yip owycx6da btwxx1t3">
              <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz">
                <div className="b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt spb7xbtv bkmhp75w emlxlaya s45kfl79 cwj9ozl2">
                  <div aria-label="Acciones de foto del perfil" role="button" className="container-img-btn" tabIndex="0">
                    <div className="q9uorilb l9j0dhe7 pzggbiyp du4w35lb">
                      <svg aria-hidden="false" aria-label="Acciones de foto del perfil" className="pzggbiyp style-svg-fb"
                        data-visualcompletion="ignore-dynamic" role="img">
                        <mask id="jsc_c_8u"><circle cx="84" cy="84" fill="white" r="84"></circle></mask>
                        <g mask="url(#jsc_c_8u)">
                          <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" className="image-fb-profile"
                            href={imgProfile}></image>
                          <circle className="mlqo0dh0 georvekb s6kb5r3f" cx="84" cy="84" r="84"></circle>
                        </g>
                      </svg>
                      {
                        (isEdit === true) && (
                          <>
                            <div className="separador-btn-img" data-visualcompletion="ignore"></div>
                            <div className="qeporeusna">
                              <div aria-hidden="true">
                                <div className="kjnkjldajfaslkjqd"></div>
                                <button aria-label="Actualizar foto del perfil" className="btn-img-profile"
                                    tabIndex="-1" type="button">
                                  <i data-visualcompletion="css-img" className="ahalskdjwqwe"></i>
                                  <div className="qwlkjjlsaddd"></div>
                                </button>
                              </div>
                            </div>
                          </>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip owycx6da btwxx1t3 d1544ag0 
            tw6a2znq discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
            <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz p8fzw8mz pcp91wgn 
              iuny7tx3 ipjc6fyt">
              <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0">
                <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">

                  <div className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 bp9cbjyn jb3vyjys">
                    <div className="j83agx80 cbu4d94t obtkqiv7 sv5sfqaa">
                      <div className="bi6gxh9e aov4n071">
                        <span className="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j mhxlubs3 p5u9llcw
                            hnhda86s oo9gr5id oqcyycmt">
                          <h1 className="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl">
                            {`${fullname}`}
                            <span className="h676nmdw knj5qynh m6dqt4wy">
                              ({`${fullname}`})
                            </span>
                          </h1>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="container-subtitle">
                    <div className="adfjalksfjlqlkflka">
                      <div className="cmaskjlkassdmmddj">
                        <span className="dcacknkasaasxkm">
                          <button className="nlklknasasd" tabIndex="0" type="button">
                            Agregar presentación
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerNameProfile
