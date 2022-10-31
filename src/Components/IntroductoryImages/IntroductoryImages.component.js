import React, { Component } from 'react';
import "./IntroductoryImages.scss";

class IntroductoryImagesComponent extends Component {


    state = {
        initial: true
    }

    toggleImage = () => {
        this.setState(prevState => ({
            initial: !prevState.initial
        }));
    }

    componentDidMount() {
        this.setTimeOut = setInterval(() => this.toggleImage(), 3000);
    }


    firstImage = "https://res.cloudinary.com/rajkumarpyla/image/upload/v1613379237/magnasv/images/slider2_kdhv2d.webp";
    secondImage = "https://res.cloudinary.com/rajkumarpyla/image/upload/v1613373728/magnasv/images/mobile-slider1.png";

    render() {
        return (
            <div className="introductory-container">

                {this.state.initial ? (
                        <div key="one">
                            <div className="introductory-image-wrapper">
                                <img src={this.firstImage} />
                            </div>

                            <div className="introductory-content-wrapper">
                                <div className="introductory-info-box-wrapper" />


                                <div className="introductory-content">
                                    <div className="it-title">
                                        <div className="it-title-one">
                                            THE MOST SUCCESSFUL
                                        </div>
                                        <div className="it-title-two">
                                            ENT HOSPITAL
                                        </div>
                                        <div className="it-title-three">
                                            IN MAHABUBNAGAR
                                        </div>
                                    </div>
                                    <div className="it-description">
                                        Take a step towards good health with our best care
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div key="two">
                            <div className="introductory-image-wrapper">
                                <img src={this.firstImage} />
                            </div>

                            <div className="introductory-content-wrapper">
                                <div className="introductory-info-box-wrapper" />


                                <div className="introductory-content">
                                    <div className="it-title">
                                        <div className="it-title-one">
                                            Welcome to Sri Devichandra ENT hospital
                                        </div>
                                        <div className="it-title-two">
                                            Dr. G. Chandra Shekar
                                        </div>
                                        <div className="it-title-three">
                                            B.Sc., M.B.B.S., D.L.O.(Osm.)
                                        </div>
                                    </div>
                                    <div className="it-description">
                                        Senior ENT Consultant with 30+ years of experience and 100% success rate
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default IntroductoryImagesComponent;
