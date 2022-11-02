import React, {Component} from 'react';
import imageTwo from "../../assets/services/image2.webp";

import "./aboutDoctor.scss";

class AboutDoctorComponent extends Component {
    render() {
        return (
            <div className="about-doctor-container" id="aboutUs">
                <div className="about-doctor-title-wrapper">
                    {/*<div className="about-doctor-title-helper">*/}
                    {/*    */}
                    {/*</div>*/}
                    <div className="about-doctor-title">
                         About the Doctor
                    </div>
                </div>
                <div className="about-doctor-content">
                    <div className="about-doctor-intro-wrapper">
                        <div className="about-doctor-intro-title">
                            Compassion, Empathy and Excellence in Service
                        </div>
                        <div className="about-doctor-description">
                            Dr Chandra Shekar is the founder & director of Sri Devichandra ENT Speciality Hospital. He has done his MBBS from Osmania Medical College & D.L.O (ENT) from Gandhi Medical College, Hyderabad. After that, he worked in government institutions across different geographies before finally founding the hospital. Overall, he has 30+ years of experience in treating ENT related problems and is a well known figure across the state of Telangana and Andhra Pradesh. He has attended multiple workshops nationally & internationally and has delivered lectures on various ENT topics in the national and state wide conferences. For his contribution and service to the community, he has been recognised and showered with numerous accolades and was felicitated by Indian Medical Association (IMA) in 2015.
                        </div>
                    </div>
                    <div className="about-doctor-intro-images">
                        <img src={imageTwo}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutDoctorComponent;
