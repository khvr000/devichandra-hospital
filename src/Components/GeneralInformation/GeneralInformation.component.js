import React, {Component} from 'react';
import "./GeneralInformation.css";
import classnames from 'classnames';

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
            value: '9848421036, 9848506111',
            className: 'call',
        },
        {
            icon: 'cmsmasters-icon-mail-3',
            headerText: 'Send us a Message',
            value: 'sreedevichandrahospital@gmail.com',
            className: 'email',
        },
        {
            icon: 'cmsmasters-icon-location-3',
            headerText: 'Visit our Location',
            value: 'Shashabgutta, Mahabubnagar',
            className: 'location',
        },
    ];

    handleLocationClick = () => {
        window.open('https://goo.gl/maps/wXKrHwgLzmvg74cF6', '_blank').focus();
    }


    infoComponent = (infoItem) => {
        return (
            <div className="info-component-container" onClick={this.handleLocationClick}>
                <div className={`icon-wrapper ${infoItem.icon}`} />
                <div className="info-item-content-wrapper">
                    <div className="info-item-header-text">
                        {infoItem.headerText}
                    </div>
                    <div className={classnames('info-item-header-value', infoItem.className)}>
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
