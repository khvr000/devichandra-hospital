import React, {Component} from 'react';
import "./GeneralInformation.css";

const infoComponentStyles = {
    display: 'flex',
    alignItems: 'center',
}

const generalInformationStyles = {
    display: 'flex',
    justifyContent: 'space-between'
}

class GeneralInformationComponent extends Component {

    data = [
        {
            icon: 'cmsmasters-icon-phone-4',
            headerText: 'Give us a Call',
            value: '1-888-123-14567'
        },
        {
            icon: 'cmsmasters-icon-mail-3',
            headerText: 'Send us a Message',
            value: 'medical-clinic@mail.com'
        },
        {
            icon: 'cmsmasters-icon-location-3',
            headerText: 'Visit our Location',
            value: '3213 Suitland Street'
        },
    ];


    infoComponent = (infoItem) => {
        return (
            <div className="info-component-container">
                <div className={`icon-wrapper ${infoItem.icon}`} />
                <div className="info-item-content-wrapper">
                    <div className="info-item-header-text">
                        {infoItem.headerText}
                    </div>
                    <div className="info-item-header-value">
                        {infoItem.value}
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="general-information-container">
                {this.data.map(dataItem => this.infoComponent(dataItem))}
            </div>
        );
    }
}

export default GeneralInformationComponent;
