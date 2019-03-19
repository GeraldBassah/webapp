import React, { Component } from "react";
import "./Accounts.css";
import BarChart from "./BarChart.jsx";

class Accounts extends Component {

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
                            <li className="nav-item ">
                                <a className="nav-link" href="/revdashboard">Dashboard </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/rev/Accounts">Accounts<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Section
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/rev/viewsectionalheads">View Sectional Heads</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/rev/addsectionalheads">Add Sectional Heads</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Collectors
                          </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/rev/viewtollcollectors">View Toll Collectors</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/rev/tracktollcollectors">Track Toll Collectors</a>
                                </div>
                            </li>
                        </ul>



                    </div>
                </nav>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <h2 style={{ color: 'white' }}><i className="fas fa-money-bill-alt"></i> Accounts <small>Manage Your Accounts </small></h2>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="breadcrumb">
                    <div className="container">

                        <ol className="breadcrumb">
                            <li className="active">Accounts</li>

                        </ol>
                    </div>
                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="list-group">
                                    <a href="/revdashboard" className="list-group-item list-group-item-action ">
                                        <i className="fas fa-tachometer-alt"></i> Dashboard
  </a>
                                    <a href="/rev/Accounts" className="list-group-item list-group-item-action active main-color-bg" style={{ border: 'none' }}><i className="fas fa-money-bill-alt"></i> Accounts</a>

                                    <div className="dropdown">
                                        <a href="#" className="list-group-item list-group-item-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-star-of-life"></i> Section
                </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/rev/viewsectionalheads">View Sectional Heads</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/rev/addsectionalheads">Add Sectional Heads</a>

                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="list-group-item list-group-item-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-walking"></i> Collectors</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/rev/viewtollcollectors">View Toll Collectors</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/rev/tracktollcollectors">Track Toll Collectors</a>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card ">
                                    <h5 className="card-header main-color-bg" style={{ border: 'none' }}>Accounts</h5>
                                    <div className="card-body">
                                        <div className="container">
                                            <div className="row">

                                                <table className="table table-hover table-sm">
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Published</th>
                                                        <th>Created</th>
                                                        <th></th>
                                                    </tr>
                                                    <tr>
                                                        <td>Home</td>
                                                        <td><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                                                        <td>Dec 12, 2016</td>
                                                        <td>
                                                            <a class="btn btn-danger" href="edit.html">
                                                                <span className="d-none d-md-flex"> Edit</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-icon-pencil"></i></span>
                                                            </a>

                                                            <a class="btn btn-secondary" href="#">
                                                                <span className="d-none d-md-flex"> Delete</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-times"></i></span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>About</td>
                                                        <td><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                                                        <td>Dec 13, 2016</td>
                                                        <td>
                                                            <a class="btn btn-danger" href="#">
                                                                <span className="d-none d-md-flex"> Edit</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-icon-pencil"></i></span>
                                                            </a>

                                                            <a class="btn btn-secondary" href="#">
                                                                <span className="d-none d-md-flex"> Delete</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-times"></i></span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Services</td>
                                                        <td><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                                                        <td>Dec 13, 2016</td>
                                                        <td>
                                                            <a class="btn btn-danger" href="#">
                                                                <span className="d-none d-md-flex"> Edit</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-icon-pencil"></i></span>
                                                            </a>

                                                            <a class="btn btn-secondary" href="#">
                                                                <span className="d-none d-md-flex"> Delete</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-times"></i></span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Contact</td>
                                                        <td><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                                                        <td>Dec 14, 2016</td>
                                                        <td>
                                                            <a class="btn btn-danger" href="#">
                                                                <span className="d-none d-md-flex"> Edit</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-icon-icon-pencil"></i></span>
                                                            </a>

                                                            <a class="btn btn-secondary" href="#">
                                                                <span className="d-none d-md-flex"> Delete</span>
                                                                <span className="d-block d-sm-none"><i className="fas fa-times"></i></span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="card">

                                        <h5 className="card-header main-color-bg" style={{ border: 'none' }}>Toll Distribution</h5>
                                        <div className="card-body">
                                            <div className="col-md-9">
                                                <BarChart />
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
export default Accounts;