import React, {Component} from 'react';
import "./topMenu.scss";

class TopMenuComponent extends Component {

    menuData = ['Home', 'Departments', 'Timetable', 'Features', 'Shortcodes'];

    jdUrl = "https://www.justdial.com/Mahabubnagar/Sree-Devi-Chandra-Ent-Hospital-Opposite-Panchvati-Restaurant-Behind-Sanskriti-Shopping-Mall-New-Town/9999P8545-8545-110126224229-X5K5_BZDET";
    locationUrl = "https://goo.gl/maps/wXKrHwgLzmvg74cF6";

    handleIconClick = (url) => {
        window.open(url, '_blank').focus();
    }

    render() {
        return (

            <>


                <div className="top-menu-container">

                    <div className="top-menu-helper">
                        <div className="top-menu-left">
                            <div
                                className="just-dail"
                                onClick={() => this.handleIconClick(this.jdUrl)}
                            >
                                Jd
                            </div>
                            <div className="number">
                                <i className="material-icons-outlined">phone_in_talk</i>
                                9848421036
                            </div>
                        </div>
                        <div className="top-menu-right" onClick={() => this.handleIconClick(this.locationUrl)}>
                            <i className="material-icons-outlined">location_on</i>
                            Mahabubnagar
                        </div>
                    </div>

                    <div className="top-menu">
                        <div className="hospital-title-wrapper">
                            <div className="hospital-logo">
                                Devichandra Hospital
                            </div>
                        </div>

                        <div className="menu-items-wrapper">
                            {this.menuData.map(menuDataItem => (
                                <div className="menu-item">
                                    {menuDataItem}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </>

        );
    }
}

export default TopMenuComponent;
