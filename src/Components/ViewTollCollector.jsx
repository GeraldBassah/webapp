import React, { Component } from "react";

class ViewTollCollector extends Component {

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
                                <a class="nav-link" href="/revdashboard">Dashboard </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/rev/Accounts">Accounts</a>
                            </li>
                            <li class="nav-item  dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Section
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/rev/viewsectionalheads">View Sectional Heads</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/rev/addsectionalheads">Add Sectional Heads</a>
                                </div>
                            </li>
                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Collectors<span class="sr-only">(current)</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/rev/viewtollcollectors">View Toll Collectors</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/rev/tracktollcollectors">Track Toll Collectors</a>
                                </div>
                            </li>
                        </ul>



                    </div>
                </nav>
                <header id="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <h2><i class="fas fa-bullseye"></i> View Toll Collectors <small>Manage your Collectors </small></h2>
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
                                    <a href="/revdashboard" class="list-group-item list-group-item-action ">
                                        <i class="fas fa-tachometer-alt"></i> Dashboard
  </a>
                                    <a href="/rev/Accounts" class="list-group-item list-group-item-action"><i class="far fa-money-bill-alt"></i> Accounts</a>

                                    <div class="dropdown">
                                        <a href="#" class="list-group-item list-group-item-action dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-star-of-life"></i> Section
                </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="/rev/viewsectionalheads">View Sectional Heads</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/rev/addsectionalheads">Add Sectional Heads</a>

                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <a href="#" class="list-group-item list-group-item-action dropdown-toggle active main-color-bg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-walking"></i> Collectors</a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="/rev/viewtollcollectors">View Toll Collectors</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/rev/tracktollcollectors">Track Toll Collectors</a>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="card ">
                                    <h5 class="card-header main-color-bg">Featured</h5>
                                    <div class="card-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="card p-3 text-right">
                                                        <h5 class="card-title">Card title</h5>
                                                        <p class="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="card p-3 text-right">
                                                        <h5 class="card-title">Card title</h5>
                                                        <p class="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="card p-3 text-right">
                                                        <h5 class="card-title">Card title</h5>
                                                        <p class="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="card p-3 text-right">
                                                        <h5 class="card-title">Card title</h5>
                                                        <p class="card-text">This is another card with title and supporting text below. </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="container">
                                    <div class="col-md-15">
                                        <div class="card">
                                            <h5 class="card-header main-color-bg">Active</h5>
                                            <table class="table table-hover">
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
export default ViewTollCollector;