import React, {Component} from 'react';

import "./hospitalStats.css";

class HospitalStatsComponent extends Component {

    data = [
        {
            value: '25000+',
            title: 'Patients'
        },
        {
            value: '3000+',
            title: 'Surgeries'
        },
        {
            value: '30+ Years',
            title: 'Experience'
        },
        {
            value: '100%',
            title: 'Care and Quality'
        }
    ]
    render() {
        return (
            <div className="stats-container">
                <div className="stats-content-wrapper">

                    {this.data.map(dataItem => (
                        <div className="stat-item" key={dataItem.title}>
                            <div className="stat-item-value">
                                {dataItem.value}
                            </div>
                            <div className="stat-item-title">
                                {dataItem.title}
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        );
    }
}

export default HospitalStatsComponent;
