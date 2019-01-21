import React, { Component } from "react";
import "./App.css";
import "./App.js";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Routes from "./Components/Routes";
//import DashBoard from "./Components/DashBoard.jsx";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import FirstPage from './Components/Firstpage';
import DashboardView from './DashboardView';
import RevSignUp from './Components/RevSignup';
import RevLogin from './Components/RevLogin';
import SecLogin from './Components/SecLogin';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/dashboard" component={DashboardView} />
          <Route exact path="/rev/signup" component={RevSignUp} />
          <Route exact path="/rev/login" component={RevLogin} />
          <Route exact path="/sec/login" component={SecLogin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
