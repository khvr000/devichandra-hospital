import React, {Component} from 'react';
import LocationImage from "../../assets/locationImage3.png";
import "./location.scss";


class LocationComponent extends Component {

    handleLocationImageClick = () => {
        window.open('https://goo.gl/maps/wXKrHwgLzmvg74cF6', '_blank').focus();
    }

    render() {
        return (
            <div className="location-container">
                <div className="location-title-helper" onClick={this.handleLocationImageClick}>
                  Google Maps
                </div>
                <div className="location-title">
                    Our Location
                </div>
                <div className="location-content" onClick={this.handleLocationImageClick}>
                    <img src={LocationImage}/>
                </div>
            </div>
        );
    }
}

export default LocationComponent;
