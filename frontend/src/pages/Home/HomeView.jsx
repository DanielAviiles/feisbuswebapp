import React from 'react'
import Navbar from '../../components/Navbar';

const HomeView = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="p-5">
          <h1>Hola mundo</h1>
        </div>
      </div>
    </>
  )
}

export default HomeView
