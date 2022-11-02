import React, {Component} from 'react';
import "./partners.scss";

class PartnersComponent extends Component {


    partnersData = [
        {
            url: 'https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/5-1.jpg',
            alt: '',
            name: '1'
        },
        {
            url: 'https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/5-1.jpg',
            alt: '',
            name: '2'
        },
        {
            url: 'https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/5-1.jpg',
            alt: '',
            name: '3'
        },
        {
            url: 'https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/5-1.jpg',
            alt: '',
            name: '4'
        },
        {
            url: 'https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/5-1.jpg',
            alt: '',
            name: '5'
        },

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
                            <div className="partners-content-item">
                                <img src={partnerDataItem.url} />
                            </div>
                        ))}

                    </div>
            </div>
        );
    }
}

export default PartnersComponent;
