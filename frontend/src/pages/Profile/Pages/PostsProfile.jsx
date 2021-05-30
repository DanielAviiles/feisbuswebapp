import React from 'react'
import Card from '../../../components/Card'

const PostsProfile = ({ userData, posteos = null, edit, loading }) => {
  return (
    <div className="alskdmnc9837alks">

      <div className="col1tarjetas">
        {
          (loading)
            ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
            : (
              <div className="card p-0 border-0 card-style-global">
                <div className="card-body">
                  <div className="card-title fs-4">
                    <strong>Detalles</strong>
                  </div>
                  <p className="pt-1">
                    <i className="fas fa-map-marker-alt fs-4 pe-3 text-muted"></i>
                    De <strong>Neiva</strong>
                  </p>
                  <p className="pt-1">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/JanwljMyOww.png" 
                      alt="followers" width="20" className="sklasmdl1298" />
                    <strong className="ps-3">100 seguidores</strong>
                  </p>

                  <div className="d-grid gap-2 mb-3">
                    <button className="btn btn-da-card-fb" type="button">
                      <strong>Editar detalles</strong>
                    </button>
                  </div>
                  <div className="d-grid gap-2 mb-3">
                    <button className="btn btn-da-card-fb" type="button">
                      <strong>Agregar pasatiempos</strong>
                    </button>
                  </div>
                  <div className="d-grid gap-2 mb-1">
                    <button className="btn btn-da-card-fb" type="button">
                      <strong>Agregar destacados</strong>
                    </button>
                  </div>
                </div>
              </div>
            )
        }
      </div>

      <div className="col2tarjetaspsot">
        {
          (loading)
            && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
        }
        { (!loading && edit) && ( <div className="mb-3"><Card datauser={userData} typeCard="postear" /></div> ) }
        { (!loading && edit) && ( <div className="mb-3"><Card typeCard="filter" /></div> ) }
        {
          (!loading) && (
            (posteos != null) && (posteos.map((item, idx) => (
              <div className="mb-4" key={idx}>
                <Card datauser={userData} dataPost={item}/>
              </div>
            )))
          )
        }
      </div>
    </div>
  )
}

export default PostsProfile
