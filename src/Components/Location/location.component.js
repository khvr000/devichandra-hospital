import React, {Component} from 'react';
import "./location.scss";


class LocationComponent extends Component {

    handleLocationImageClick = () => {
        window.open('https://goo.gl/maps/wXKrHwgLzmvg74cF6', '_blank').focus();
    }

    render() {
        return (
            <div className="location-container">
                <div className="location-title">
                    Our Location
                </div>
                <div className="location-content" onClick={this.handleLocationImageClick}>
                    <img src="https://image3.jdomni.in/library/17062020/3F/E9/AF/AE37B88C73C00E9EA6F497DB70_1592388373727.jpg?output-format=webp"/>
                </div>
            </div>
        );
    }
}

export default LocationComponent;
