import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginView from "../pages/LogIn/LoginView";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const Routerapp = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={LoginView} isAuthenticated={user.logged} />
        <PrivateRoute path="/" component={DashBoardRoutes} isAuthenticated={user.logged}/>
      </Switch>
    </Router>
  )
}
