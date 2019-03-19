import React, { Component } from "react";
import { Button, Grid } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Firstpage.css";
import fifth from "../img/fifth.jpg";
import fourth from "../img/fourth.jpg";
import third from "../img/third.jpg";
import second from "../img/second.jpg";
import first from "../img/first.jpg";
import Features from "./features.jsx";
import { AutoComplete } from "antd";


//import  RevLogin  from "./Components/RevLogin";


class Firstpage extends Component {

  render() {
    return (
      <div id="Firstpage">

        <nav className="navbar fixed-top navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/"><Link to="Home" smooth={true} >MMDA Suite</Link></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"><Link to="Home" smooth={true} >Home</Link><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="services" smooth={true} >Features</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="HowWorks" smooth={true} >How it works</Link></a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="mycarousel">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={first} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={second} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={third} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={fourth} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={fifth} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>

        </div>
        <Grid className="revsecbuttons col-md-2 col-sm-6 col-xs-12" style={{}}>

          <Button className="btn btn-primary btn-block" bsStyle="primary" bsSize="large" block onClick={this.onPageChange}
            name="/revlogin" >
            Revenue Head
               </Button>


          <Button className="btn btn-primary btn-block" bsSize="large" bsStyle="primary" block onClick={this.onPageChange} name="/seclogin">
            Sectional Head
               </Button>


        </Grid>
        <div id="Features">
          <Features />
        </div>
        <footer id="footer">
          <p style={{ color: 'white' }}>Copyright MMDA, &copy; 2019</p>
        </footer>



      </div >

    );
  }
  onPageChange = (e) => {
    this.props.history.push(e.target.name);
  };
}



export default Firstpage;
