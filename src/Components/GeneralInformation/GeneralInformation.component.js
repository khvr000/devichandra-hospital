import React, {Component} from 'react';
import "./GeneralInformation.scss";
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
            url: ''
        },
        {
            icon: 'cmsmasters-icon-mail-3',
            headerText: 'Send us a Message',
            value: 'sreedevichandrahospital@gmail.com',
            className: 'email',
            url: ''
        },
        {
            icon: 'cmsmasters-icon-location-3',
            headerText: 'Visit our Location',
            value: 'Shashabgutta, Mahabubnagar',
            className: 'location',
            url: 'https://goo.gl/maps/wXKrHwgLzmvg74cF6'
        },
    ];

    handleLocationClick = (url) => {
        if (url) {
            window.open(url, '_blank').focus();
        }
    }


    infoComponent = (infoItem) => {
        return (
            <div className="info-component-container" onClick={() => this.handleLocationClick(infoItem.url)} key={infoItem.className}>
                <div className={`icon-wrapper ${infoItem.icon}`} />
                <div className="info-item-content-wrapper">
                    <div className="info-item-header-text">
                        {infoItem.headerText}
                    </div>
                    <div className={classnames('info-item-header-value', infoItem.className)}>
                        {infoItem.className === 'call' ? (
                            <a className="mobile-clickable-wrap" href="tel:9848421036">{infoItem.value}</a>
                        ): infoItem.value}
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
