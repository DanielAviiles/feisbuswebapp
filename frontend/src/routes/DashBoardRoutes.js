import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from '../components/Navbar';
import HomeView from '../pages/Home/HomeView';
import axios from 'axios';

const { REACT_APP_API } = process.env;
const endPointLogged = `${REACT_APP_API}/aboutuser`;

export const DashBoardRoutes = () => {
  const [userData, setUserData] = useState({});
  const consumeData = async () => {
    try {
      const { userLogin } = JSON.parse(localStorage.getItem('idUserLoged'));
      const { data } = await axios.get(`${endPointLogged}/${userLogin}`);
      setUserData(data.dataUser[0]);
    } catch (err) {
      console.warn(err);
    }
  }

  // console.log(userData);

  useEffect(() => {
    consumeData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid p-5">
        <Switch>
          <Route exact path="/dashboard" component={HomeView} />
          <Redirect to="/dashboard"/>
        </Switch>
      </div>
    </>
  )
}
