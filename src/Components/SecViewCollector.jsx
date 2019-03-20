import React, { Component } from "react";

class SecViewCollector extends Component {

    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">MMDA Suite</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <a class="nav-link" href="/secdashboard">Dashboard </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/secAccount">Accounts</a>
                            </li>

                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Collectors<span class="sr-only">(current)</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/rev/viewtollcollectors">View Toll Collectors</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/secTrackCollector">Track Toll Collectors</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/SecAddcollector">Add Toll Collector</a>
                                </div>
                            </li>
                        </ul>



                    </div>
                </nav>
                <header id="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <h2 style={{ color: 'white' }}><i class="fas fa-bullseye"></i> View Toll Collectors <small>Manage your Collectors </small></h2>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="breadcrumb">
                    <div class="container">

                        <ol class="breadcrumb">
                            <li class="active">Collectors/View Toll Collectors</li>

                        </ol>
                    </div>
                </section>

                <section id="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="list-group">
                                    <a href="/secdashboard" class="list-group-item list-group-item-action ">
                                        <i class="fas fa-tachometer-alt"></i> Dashboard
  </a>
                                    <a href="/secAccount" class="list-group-item list-group-item-action"><i class="far fa-money-bill-alt"></i> Accounts</a>


                                    <div className="dropdown">
                                        <a href="#" className="list-group-item list-group-item-action dropdown-toggle active main-color-bg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ border: 'none' }}><i className="fas fa-walking"></i> Section Collectors</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/SecViewCollector">View Toll Collectors</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/secTrackCollector">Track Toll Collectors</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/secAddCollector">Add Toll Collectors</a>


                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card ">
                                    <h5 className="card-header main-color-bg" style={{ border: 'none' }}>Toll Collectors</h5>
                                    <div className="card-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div class="w-100">

                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>


                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div class="w-100">

                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>


                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div class="w-100">

                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div className="otherinfo">
                                                        <div className="well profile">
                                                            <div className="userimage"><i className="far fa-user-circle"></i></div>


                                                        </div>
                                                    </div>
                                                </div>


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
export default SecViewCollector;