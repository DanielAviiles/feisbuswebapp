import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeView from "../pages/Home/HomeView";
import LoginView from "../pages/LogIn/LoginView";

export const Routerapp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/authentication">
          <LoginView/>
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  )
}
