import React, { Component } from "react";
import "./Accounts.jsx";
import { Navbar, Nav } from 'react-bootstrap';
import Linechart from "./Linechart.jsx"




class SecdashboardView extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">MMDA Suite</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/secdashboard">Dashboard <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/secAccount">Accounts</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Section Collectors
                          </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/secViewCollector">View Toll Collectors</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/secTrackCollector">Track Toll Collectors</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/secAddCollector">Add Toll Collector</a>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }}><i className="fas fa-user-circle"> Welcome,SecHead</i></a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="/seclogin">Logout</a>
                            </li>

                        </ul>

                    </div>
                </nav>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <h2 style={{ color: 'white' }}><i className="fas fa-tachometer-alt"></i> Dashboard <small>Manage Your Site </small></h2>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="breadcrumb">
                    <div className="container">

                        <ol className="breadcrumb">
                            <li className="active">Dashboard</li>

                        </ol>
                    </div>
                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="list-group">
                                    <a href="/revdashboard" className="list-group-item list-group-item-action active main-color-bg" style={{ border: 'none' }}>
                                        <i className="fas fa-tachometer-alt"></i> Dashboard
  </a>
                                    <a href="/SecAccount" className="list-group-item list-group-item-action"><i className="far fa-money-bill-alt"></i> Accounts</a>


                                    <div className="dropdown">
                                        <a href="#" className="list-group-item list-group-item-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-walking"></i> Section Collectors</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/rev/viewtollcollectors">View Toll Collectors</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/SecTrackCollector">Track Toll Collectors</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/secAddCollector">Add Toll Collectors</a>


                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card ">
                                    <h5 className="card-header main-color-bg" style={{ border: 'none' }}>Overview</h5>
                                    <div className="card-body">
                                        <div className="container">
                                            <div className="Stats">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="well">
                                                            <h2>₵ 100,000</h2>
                                                            <p>Current Amount</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="well">
                                                            <h2>₵ 101,000</h2>
                                                            <p>Previous Amount</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="well">
                                                            <span id="inLine">
                                                                <i className="fas fa-caret-up"></i>
                                                                <h2>1%</h2>
                                                            </span>
                                                            <p>Change</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="well">
                                                            <h2>₵ 150,000</h2>
                                                            <p>Projected Amount</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="well">

                                            <div className="row second">
                                                <div className="col-md-9">
                                                    <Linechart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <div className="card">

                                        <h5 className="card-header main-color-bg" style={{ border: 'none' }}>MMDA Data</h5>
                                        <div className="card-body">
                                            <div className="container">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col-md" className="d-none d-lg-table-cell">#</th>
                                                            <th scope="col">Area</th>
                                                            <th scope="col">Number of Sectional Heads</th>
                                                            <th scope="col-md">Number of Collectors</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row-md" className="d-none d-lg-table-cell">1</th>
                                                            <td>Asokwa</td>
                                                            <td>2</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="d-none d-lg-table-cell">2</th>
                                                            <td >Tech Junction</td>
                                                            <td>1</td>
                                                            <td>7</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="d-none d-lg-table-cell">3</th>
                                                            <td >Faade</td>
                                                            <td>1</td>
                                                            <td>5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </section>
                <footer id="footer">
                    <p style={{ color: 'white' }}>Copyright MMDA, &copy; 2019</p>
                </footer>


            </div>











        );
    }
}

export default SecdashboardView;

