import React, { Component } from "react";
import "./features.css";

class Features extends React.Component {
    render() {
        return (
            <div>
                <section id="Services" style={{ marginTop: '-10%' }}>
                    <div id="about" >
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12">
                                    <h2>MMDA Suite</h2>
                                    <div className="about-content">
                                        MMDA Suite is an enhanced software suite for managing market tolls in Ghana.
			 				</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="services">
                        <h2> Services </h2>
                        <div className="row services">

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="fas fa-walking"></i>
                                </div>
                                <h3 style={{ color: 'white' }}>Track Collectors</h3>

                            </div>

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="fas fa-money-bill-alt"></i>
                                </div>
                                <h3 style={{ color: 'white' }}>Accounting Information</h3>

                            </div>

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="fas fa-plus"></i>
                                </div>
                                <h3 style={{ color: 'white' }}>Add Collectors</h3>

                            </div>

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="fas fa-plus-square"></i>
                                </div>
                                <h3 style={{ color: 'white' }}>Add Sectional Heads</h3>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="HowWorks">
                    <div id="youtubevideo">
                        <div className="container">
                            <div className="row">

                                <div className="video-parent">
                                    <h2>How It Works</h2>


                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item"
                                            src="https://www.youtube.com/embed/id6cbdso4x0"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default Features;