import React, {Component} from 'react';
import image1 from "../../assets/gallery/DSC_0286.jpg";
import image2 from "../../assets/gallery/DSC_0284.jpg";
import image3 from "../../assets/gallery/DSC_0287.jpg";
import image4 from "../../assets/gallery/DSC_0290.jpg";
import image5 from "../../assets/gallery/DSC_0291.jpg";
import image6 from "../../assets/gallery/DSC_0293.jpg";
import image7 from "../../assets/gallery/DSC_0296.jpg";
import image8 from "../../assets/gallery/DSC_0302.jpg";
import image9 from "../../assets/gallery/DSC_0304.jpg";

import "./gallery.scss";

const url = "https://i.picsum.photos/id/34/200/300.jpg?hmac=K076uH4zC5xneqvhRayjS90G00xjPsR7eL_ShGEr6rs";
const url2 = 'https://image3.jdomni.in/library/03072019/C9/72/D2/A0D0338B1D1D0F432466F6F832_1562169198923.jpg?output-format=webp';
const url3 = 'https://image1.jdomni.in/library/03072019/44/EB/FB/7EE81B067F6EA19F7E24649819_1562169227533.jpg?output-format=webp';

class GalleryComponent extends Component {

    state = {
        visibleIndices: [0, 1, 2],
        isMobileView: false
    }

    data2 = [
        {
            url : url,
            name: '1',
        },
        {
            url : url2,
            name: '2',
        },
        {
            url : url3,
            name: '3',
        },
    ];

    data = [
        {
            url : image7,
            name: '1',
        },
        {
            url : image2,
            name: '2',
        },
        {
            url : image3,
            name: '3',
        },
        {
            url : image4,
            name: '4',
        },
        {
            url : image5,
            name: '5',
        },
        {
            url : image6,
            name: '6',
        },
        {
            url : image1,
            name: '7',
        },
        {
            url : image8,
            name: '8',
        },
        {
            url : image9,
            name: '9',
        },
    ];

    componentDidMount() {

        const mql = window.matchMedia('(max-width: 768px)');
        let mobileView = mql.matches;

        this.setState({
            isMobileView: mobileView
        });

        if(mobileView) {
            this.interval = setInterval(() => this.handleSliderClick('prev'), 2500);
        }
    }

    getFilteredData = () => {
        const { visibleIndices } = this.state;
        const finalData = [];
        visibleIndices.forEach(index => {
            finalData.push(this.data[index]);
        });
        return finalData;
    }

    handleSliderClick = (type) => {
        const { visibleIndices } = this.state;
        let updatedIndices = [...visibleIndices];
        updatedIndices = updatedIndices.map(index => {
            const nextIndex = type === 'prev' ? index + 1 : index - 1;
            if(nextIndex < 0) {
                return nextIndex+ 3;
            }
            if (nextIndex > 2) {
                return nextIndex - 3;
            }
            return nextIndex;
        });
        this.setState({
            visibleIndices: updatedIndices
        });
    }

    render() {

        // const mql = window.matchMedia('(max-width: 768px)');
        // let mobileView = mql.matches;
        const { visibleIndices } = this.state;

        const filteredData = this.getFilteredData();

        if (this.state.isMobileView) {
            return (
                <div className="gallery-container" id="gallery">
                    <div className="gallery-title-wrapper">
                        <div className="gallery-title-helper">Snaps</div>
                        <div className="gallery-title">Gallery</div>
                    </div>
                    <div className="gallery-wrapper">
                        {filteredData.map((dataItem, index) => (
                            <div
                                className="gallery-item"
                                key={dataItem.url}
                                style={{
                                    position: 'absolute',
                                    left: (index)*400 - 430,
                                    transition: 'left 0.2s ease-in',
                                    overflow: "hidden",
                                    top: 0
                                }}
                            >
                                <img src={dataItem.url} />
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        return (
            <>
                <div className="gallery-container" id="gallery">
                    <div className="gallery-title-wrapper">
                        <div className="gallery-title-helper">Snaps</div>
                        <div className="gallery-title">Gallery</div>
                    </div>
                    <div className="gallery-wrapper">
                        {this.data.map(dataItem => (
                            <div className={`gallery-item ${dataItem.name}`} key={dataItem.url}>
                                <img src={dataItem.url} />
                            </div>
                        ))}
                    </div>

                </div>
                {/*<div className="separator" />*/}
            </>
        );
    }
}

export default GalleryComponent;
