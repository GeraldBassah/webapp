import React from "react";
import "./features.css";

class Features extends React.Component {
    render() {
        return (
            <div>
                <section id="Services">
                    <div id="about">
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
                                <h3>Track Collectors</h3>
                                <p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
                            </div>

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="far fa-money-bill-alt"></i>
                                </div>
                                <h3>Accounting Information</h3>
                                <p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
                            </div>

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="fas fa-plus"></i>
                                </div>
                                <h3>Add Collectors</h3>
                                <p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
                            </div>

                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i class="fas fa-plus-square"></i>
                                </div>
                                <h3>Add Sectional Heads</h3>
                                <p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
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
                                            src="https://www.youtube.com/embed/l4TzfPfLMB4"
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