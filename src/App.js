import React, { Component } from "react";
import "./App.css";
import "./App.js";
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom'
//import DashBoard from "./Components/DashBoard.jsx";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import FirstPage from './Components/Firstpage';
import DashboardView from './DashboardView';
import RevSignup from './Components/RevSignup';
import RevLogin from './Components/RevLogin';
import SecLogin from './Components/SecLogin';
import Accounts from './Components/Accounts';
import ViewSecHead from './Components/ViewSecHead';
import ViewTollCollector from './Components/ViewTollCollector';
import ActiveCollectors from './Components/ActiveCollectors';
import SecdashboardView from './Components/SecdashboardView';
import SecAccount from './Components/SecAccount';
import SecViewCollector from './Components/SecViewCollector';
import Collector from './Components/Collector';
import SecTrackCollector from './Components/SecTrackCollector';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/revdashboard" component={DashboardView} />
          <Route exact path="/revlogin" component={RevLogin} />
          <Route exact path="/seclogin" component={SecLogin} />
          <Route exact path="/rev/accounts" component={Accounts} />
          <Route exact path="/rev/viewsectionalheads" component={ViewSecHead} />
          <Route exact path="/rev/addsectionalheads" component={RevSignup} />
          <Route exact path="/rev/viewtollcollectors" component={ViewTollCollector} />
          <Route exact path="/rev/tracktollcollectors" component={ActiveCollectors} />
          <Route exact path="/secdashboard" component={SecdashboardView} />
          <Route exact path="/secAccount" component={SecAccount} />
          <Route exact path="/secViewCollector" component={SecViewCollector} />
          <Route exact path="/secAddCollector" component={Collector} />
          <Route exact path="/secTrackCollector" component={SecTrackCollector} />


        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
