import React, { Component } from "react";
import "./Accounts.css";

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
                                <h2><i className="far fa-money-bill-alt"></i> Accounts <small>Manage Your Accounts </small></h2>
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
                            <div className="col-3">
                                <div className="list-group">
                                    <a href="/revdashboard" className="list-group-item list-group-item-action ">
                                        <i className="fas fa-tachometer-alt"></i> Dashboard
  </a>
                                    <a href="/rev/Accounts" className="list-group-item list-group-item-action active main-color-bg"><i className="far fa-money-bill-alt"></i> Accounts</a>

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
                            <div className="col-9">
                                <div className="card ">
                                    <h5 className="card-header main-color-bg">Featured</h5>
                                    <div className="card-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="card p-3 text-right">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="card p-3 text-right">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="card p-3 text-right">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="card p-3 text-right">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="col-15">
                                        <div className="card">
                                            <h5 className="card-header main-color-bg">Active</h5>
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td colspan="2">Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                <footer id="footer">
                    <p>Copyright MMDA, &copy; 2019</p>
                </footer>


            </div>









        );


    }



}
export default Accounts;