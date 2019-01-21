import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import { Footer, FooterLinkList, FooterSection, FooterDropDownSection } from 'react-mdl';
import "./Firstpage.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

//import  RevLogin  from "./Components/RevLogin";


class Firstpage extends Component {

  render() {
    return (
      // <div className="entire">
      //  <Link to="/RevLogin">Revenue Head</Link>
      // <Link to="/SecLogin"> Section Head</Link>

      <div className="wrapper">
        <Button bsStyle="primary" bsSize="large" block onClick={this.onPageChange} style={{ width: '400px' }} name="/rev/login">
          Revenue Head
       </Button>


        <Button bsSize="large" block onClick={this.onPageChange} style={{ width: '400px' }} name="/sec/login">
          Sectional Head
       </Button>
      </div>

    );
  }
  onPageChange = (e) => {
    this.props.history.push(e.target.name);
  };
}



export default Firstpage;
