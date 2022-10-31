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
                <a className="location-title-helper" href="https://goo.gl/maps/wXKrHwgLzmvg74cF6">
                  Google Maps
                </a>
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
