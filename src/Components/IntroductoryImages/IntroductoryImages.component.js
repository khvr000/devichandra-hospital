import React, { Component } from 'react';
import secondImage from "../../assets/about/DSC_0297.jpg";
import firstimage from "../../assets/gallery/DSC_0293.jpg";
import finalImage from "../../assets/about/Untitled (2).jpeg";
import tryImage from "../../assets/about/slider2_kdhv2d.webp";

import finalImageMobile from "../../assets/about/Untitled (2).jpeg";
import secondImageMobile from "../../assets/about/image_mobile.webp";
import classNames from 'classnames';

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


    // firstImage = "https://res.cloudinary.com/rajkumarpyla/image/upload/v1613379237/magnasv/images/slider2_kdhv2d.webp";
    // secondImage = "https://res.cloudinary.com/rajkumarpyla/image/upload/v1613373728/magnasv/images/mobile-slider1.png";

    render() {
        const { isMobileView } = this.props;
        return (
            <div className="introductory-container" id="home">

                {this.state.initial ? (
                        <>
                            <div className="introductory-content-wrapper">
                                {!isMobileView ? (
                                    <>
                                        <div className="introductory-image-wrapper">
                                            <img src={tryImage} />
                                        </div>
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
                                    </>
                                ): (
                                    <>
                                        <div className="introductory-image-wrapper">
                                            <span className="introductory-background-image"></span>

                                            <img src={secondImageMobile} />
                                        </div>
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
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <>


                            <div className="introductory-content-wrapper">
                                {!isMobileView ? (
                                    <>
                                        <div className={classNames('introductory-image-wrapper', {'adjust-image': !this.state.initial})}>
                                            <img src={finalImage} />
                                        </div>

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

                                    </>
                                ) : (
                                    <>
                                        <div className={classNames('introductory-image-wrapper', {'adjust-image': !this.state.initial})}>
                                            <span className="introductory-background-image"></span>
                                            <img src={finalImage} />
                                        </div>

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
                                    </>
                                )}



                            </div>
                        </>
                    )
                }
            </div>
        );
    }
}

export default IntroductoryImagesComponent;
