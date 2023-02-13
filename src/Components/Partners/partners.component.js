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
import mediAssist from "../../assets/partners/medi-assist-logo.svg";

import { StaticImage } from "gatsby-plugin-image"


import "./partners.scss";

class PartnersComponent extends Component {


    partnersData = [
        {
            url: starHealth,
            alt: 'Star Health Insurance',
            name: 'Star Health'
        },
        {
            url: paramount,
            alt: 'Paramount Health Insurance',
            name: 'Paramount'
        },
        {
            url: iffcoTokio,
            alt: 'IffcoTokio Health Insurance',
            name: 'IffcoTokio'
        },
        {
            url: mdIndia,
            alt: 'MD India Health Insurance',
            name: 'MD India'
        },
        {
            url: maxBupa,
            alt: 'Niva Max Bupa Health Insurance',
            name: 'Max Bupa'
        },
        {
            url: cigna,
            alt: 'Cigna Health Insurance',
            name: 'Cigna'
        },
        {
            url: ericssion,
            alt: 'Ericssion Health Insurance',
            name: 'Ericssion'
        },
        {
            url: newFhpl,
            alt: 'Fhpl Health Insurance',
            name: 'new Fhpl'
        },
        {
            url: relianceLogo,
            alt: 'Reliance Health Insurance',
            name: 'Reliance Logo'
        },
        {
            url: safewayInsurance,
            alt: 'Safeway Insurance',
            name: 'Safeway Insurance'
        },
        {
            url: nationalInsurance,
            alt: 'National Insurance',
            name: 'National Insurance'
        },
        {
            url: sbiLogo,
            alt: 'Sbi Health Insurance',
            name: 'Sbi Logo'
        },
        {
            url: mediAssist,
            alt: 'Medi Assist Health Insurance',
            name: 'Medi Assist'
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
                                <img src={partnerDataItem.url} alt={partnerDataItem.alt} />
                            </div>
                        ))}

                    </div>
            </div>
        );
    }
}

export default PartnersComponent;
