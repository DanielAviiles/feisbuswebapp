import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from '../components/Navbar';
import HomeView from '../pages/Home/HomeView';

export const DashBoardRoutes = () => {
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
