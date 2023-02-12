import React, {Component} from 'react';
import starHealth from "../../assets/partners/start_health_logo.svg";
import paramount from "../../assets/partners/Paramount_Newlogo.png";
import iffcoTokio from "../../assets/partners/iffco-tokio-logo-english.svg";
import mdIndia from "../../assets/partners/md_india.png";
import maxBupa from "../../assets/partners/Max_bupaLogo324x180.png";
import cigna from "../../assets/partners/cigna-logo.svg";
import ericssion from "../../assets/partners/erricson_logo.png"
import newFhpl from "../../assets/partners/newfhpl.jpg";
import relianceLogo from "../../assets/partners/reliance_logo.png";
import safewayInsurance from "../../assets/partners/safeway_insurance.png";
import nationalInsurance from "../../assets/partners/national_insurance.jpeg";
import sbiLogo from "../../assets/partners/SBI_Logo.png";

import { StaticImage } from "gatsby-plugin-image"


import "./partners.scss";

class PartnersComponent extends Component {


    partnersData = [
        {
            url: starHealth,
            alt: '',
            name: 'Star Health'
        },
        {
            url: paramount,
            alt: '',
            name: 'Paramount'
        },
        {
            url: iffcoTokio,
            alt: '',
            name: 'IffcoTokio'
        },
        {
            url: mdIndia,
            alt: '',
            name: 'MD India'
        },
        {
            url: maxBupa,
            alt: '',
            name: 'Max Bupa'
        },
        {
            url: cigna,
            alt: '',
            name: 'Cigna'
        },
        {
            url: ericssion,
            alt: '',
            name: 'Ericssion'
        },
        {
            url: newFhpl,
            alt: '',
            name: 'new Fhpl'
        },
        {
            url: relianceLogo,
            alt: '',
            name: 'Reliance Logo'
        },
        {
            url: safewayInsurance,
            alt: '',
            name: 'Safeway Insurance'
        },
        {
            url: nationalInsurance,
            alt: '',
            name: 'National Insurance'
        },
        {
            url: sbiLogo,
            alt: '',
            name: 'Sbi Logo'
        }

    ];

    render() {
        return (
            <div className="partners-container" id="partners">
                    <div className="partners-title-wrapper">
                        <a href="" className="partners-title-helper">Empanelment</a>
                        <div className="partners-title">Our Partners</div>
                    </div>

                    <div className="partners-content">
                        {this.partnersData.map(partnerDataItem => (
                            <div className="partners-content-item" key={partnerDataItem.name}>
                                <img src={partnerDataItem.url} />
                            </div>
                        ))}

                    </div>
            </div>
        );
    }
}

export default PartnersComponent;
