import React, {Component} from 'react';
import "./gallery.scss";

const url = "https://image3.jdomni.in/library/17062020/3F/E9/AF/AE37B88C73C00E9EA6F497DB70_1592388373727.jpg?output-format=webp";
const url2 = 'https://image3.jdomni.in/library/03072019/C9/72/D2/A0D0338B1D1D0F432466F6F832_1562169198923.jpg?output-format=webp';
const url3 = 'https://image1.jdomni.in/library/03072019/44/EB/FB/7EE81B067F6EA19F7E24649819_1562169227533.jpg?output-format=webp';

class GalleryComponent extends Component {

    data = [
        {
            url : url,
            name: '',
        },
        {
            url : url2,
            name: '',
        },
        {
            url : url3,
            name: '',
        },
        {
            url : url,
            name: '',
        },
        {
            url : url,
            name: '',
        },
        {
            url : url,
            name: '',
        },
        {
            url : url,
            name: '',
        },
        {
            url : url2,
            name: '',
        },
        {
            url : url3,
            name: '',
        },
    ]
    render() {

        return (
            <>
                <div className="gallery-container">
                    <div className="gallery-title-wrapper">
                        <a href="" className="gallery-title-helper">Snaps</a>
                        <div className="gallery-title">Gallery</div>
                    </div>
                    <div className="gallery-wrapper">
                        {this.data.map(dataItem => (
                            <div className="gallery-item">
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
