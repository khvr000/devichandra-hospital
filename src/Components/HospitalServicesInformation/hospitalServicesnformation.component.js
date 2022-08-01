import React,  { Component } from "react";
import "./hospitalServicesInformation.css";


class HospitalServicesInformationComponent extends React.Component {

    servicesData = [
        {
            icon: 'cmsmasters-icon-custom-4',
            title: 'Medical Treatment',
            description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique'
        },
        {
            icon: 'cmsmasters-icon-custom-2',
            title: 'Emergency Help',
            description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique'
        },
        {
            icon: 'cmsmasters-icon-custom-27',
            title: 'Medical professionals',
            description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique'
        },
        {
            icon: 'cmsmasters-icon-custom-6',
            title: 'Qualified Doctors',
            description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique'
        },
    ];

    render() {
        return (<div className="row-outer">
                    <div className="hospital-services-information-container">

                        <div className="services-header-container">

                            <div className="services-header-title-wrapper">
                                <h1 className="services-header-title">
                                    Awesome Theme for Medical and Health Websites
                                </h1>
                            </div>

                            <div className="services-header-content">
                                Medical Clinic WordPress theme was created to offer a perfect solution for medical websites.
                            </div>

                        </div>

                        <div className="services-container">
                            {this.servicesData.map(servicesData => (
                                <div className="service-item">
                                    <div className={ `service-item-icon ${servicesData.icon}`} />
                                    <div className="service-item-title">
                                        {servicesData.title}
                                    </div>
                                    <div className="service-item-description">
                                        {servicesData.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
            </div>
            )
    }
}

export default HospitalServicesInformationComponent;
