import React from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import Logout from "./Logout";
import Home from "./Home";
import DashBoard from "./DashBoard";
import Help from "./Help";
import ActiveCollectors from "./ActiveCollectors";
import RevSignUp from "./RevSignup";


const Routes = () => (
  <Switch>
    <Route exact path="/dashboard" component={LandingPage} />
    <Route exact path="/dashboard/logout" component={Logout} />
    <Route exact path="/dashboard/home" component={Home} />
    <Route exact path="/dashboard/main" component={DashBoard} />
    <Route exact path="/dashboard/help" component={Help} />
    <Route exact path="/dashboard/activeCollectors" component={ActiveCollectors} />
  </Switch>
)
export default Routes;
