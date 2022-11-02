import React, { Component } from "react";
import imageOne from "../../assets/services/image1.png";
import imageTwo from "../../assets/services/image2.webp";
import imageThree from "../../assets/services/image3.jpg";
import imageFour from "../../assets/services/image4.webp";
import imageFive from "../../assets/services/image5.jpg";
import imageSix from "../../assets/services/image6.webp";
import imageSeven from "../../assets/services/image7.png";
import imageEight from "../../assets/services/image8.webp";
import imageNine from "../../assets/services/image9_old.jpg";

import "./medicalServices.scss";

class MedicalServicesComponent extends Component {

    textDescription = ["Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique "];

    servicesData = [
        {
            title: 'Diagnosis',
            img: imageOne,
            description: ['Digital Video Endoscopy', 'Allergies', 'Pediatric ENT Problems']
        },
        {
            title: 'ENT Surgeries',
            img: imageNine,
            description: [
                "Rhinoplasty ",
                "Tonsillectomy Surgery",
                "Coblation Surgery ",
                "Thyroid Treatment and Surgery ",
                "Facial Plastic Surgery ",
                "Micro Ear Surgery ",
                "Endoscopic Sinus Surgery"
            ]
        },
        {
            title: 'Ear Treatment ',
            img: imageThree,
            description: ['Ear Pain',  'Wax Removal' , 'Foreign Body Removal']
        },
        {
            title: 'Deafness',
            img: imageFour,
            description: ['Hearing problems', 'Pain less Ear', 'Nose piercing']
        },
        {
            title: 'Throat',
            img: imageFive,
            description: ['Throat Infections', 'Gum Related Treatment']
        },
        {
            title: 'Hearing Aids',
            img: imageSix,
            description: ['Sales and Service',  'Diagnostic Services', 'Computerised Audiometric Testing']
        },
        {
            title: 'Nose',
            img: imageSeven,
            description: ['Sinus Treatment', 'Nose Blockage Treatment',  'Snoring Treatment']
        },
        {
            title: 'Speech',
            img: imageEight,
            description: ['Speech Therapy', 'Sleep', 'Snoring Treatment']
        }
    ];

    render() {
        return (
            <div className="medical-services-container" id="services" ref={this.props.innerRef}>
                <div className="medical-services-header-wrapper">
                    <div className="header-title">
                        Treatments
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
                                    src={serviceData.img}
                                />
                                <div className="image-title">
                                    {serviceData.title}
                                </div>
                                {/*<div className="separator" />*/}
                                <div className="service-description">
                                    {serviceData.description.map(des => (
                                        <>
                                            <div className="text-wrapper">
                                                <div className="dot-character" />
                                                <div>{des}</div>
                                            </div>
                                        </>

                                    ))}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}

// export default MedicalServicesComponent;
export default React.forwardRef((props, ref) => <MedicalServicesComponent
    innerRef={ref} {...props}
/>);
