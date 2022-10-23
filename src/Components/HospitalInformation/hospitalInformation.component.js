import React, { Component } from "react";
import "./hospitalInformation.css";

class HospitalInformationComponent extends Component {

    data = [
        {
            title: 'Top Doctors',
            description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.'
        },
        {
            title: '24 Hours Service',
            description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.'
        },
        {
            title: 'Opening Hours',
            description: ''
        },
    ]

    render() {
        return (
            <div className="hospital-information-container">
                <div className="featured_block_inner">
                    <div className="title">
                        Top Doctors
                    </div>
                    <div className="description">
                        With experience of over 30 years, our hospital strives for excellence with the best class treatment & modern technology, we offer the best treatment at the most affordable prices.
                    </div>
                </div>
                <div className="featured_block_inner">
                    <div className="title">
                        24 Hours Service
                    </div>
                    <div className="description">
                        Our patients wellbeing is important to us. In case of an emergency you can visit the hospital by confirming our availability by telephone at any time of the day, 24/7.
                    </div>
                </div>
                <div className="featured_block_inner">
                    <div className="title">
                        Opening Hours
                    </div>
                    <div className="description">
                        <div className="timings-text">
                            <span>Monday - Saturday</span>
                            <span>8.00 - 17.00</span>
                        </div>
                        <div className="timings-text">
                            <span>Sunday</span>
                            <span>8.00 - 5.00</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HospitalInformationComponent;
