import React, { Component } from "react";

import "./medicalServices.scss";

class MedicalServicesComponent extends Component {

    textDescription = "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique ";

    servicesData = [
        {
            title: 'Laboratory Analysis',
            img: "https://medical-clinic.cmsmasters.net/gynaecological-clinic/",
            description: this.textDescription
        },
        {
            title: 'Laboratory Analysis',
            img: "https://medical-clinic.cmsmasters.net/gynaecological-clinic/",
            description: this.textDescription
        },
        {
            title: 'Laboratory Analysis',
            img: "https://medical-clinic.cmsmasters.net/gynaecological-clinic/",
            description: this.textDescription
        },
        {
            title: 'Laboratory Analysis',
            img: "https://medical-clinic.cmsmasters.net/gynaecological-clinic/",
            description: this.textDescription
        }
    ];

    render() {
        return (
            <div className="medical-services-container">
                <div className="medical-services-header-wrapper">
                    <div className="header-title">
                        Innovation
                    </div>
                    <div className="header-text">
                        Our Services
                    </div>
                </div>
                <div className="medical-services-content">
                    {
                        this.servicesData.map(serviceData => (
                            <div className="service-item-wrapper">
                                <img
                                    className="service-item-image"
                                    alt="wetewt"
                                    width={580}
                                    height={360}
                                    src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/11.jpg"
                                />
                                <div className="image-title">
                                    {serviceData.title}
                                </div>
                                <div className="separator" />
                                <div className="service-description">
                                    {serviceData.description}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default MedicalServicesComponent;
