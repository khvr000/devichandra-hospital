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
                        Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
                    </div>
                </div>
                <div className="featured_block_inner">
                    <div className="title">
                        24 Hours Service
                    </div>
                    <div className="description">
                        Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
                    </div>
                </div>
                <div className="featured_block_inner">
                    <div className="title">
                        24 Hours Service
                    </div>
                    <div className="description">
                        Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
                    </div>
                </div>
            </div>
        );
    }
}

export default HospitalInformationComponent;
