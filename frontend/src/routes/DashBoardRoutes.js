import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from '../components/Navbar';
import HomeView from '../pages/Home/HomeView';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div class="container-fluid p-5">
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </>
  )
}
