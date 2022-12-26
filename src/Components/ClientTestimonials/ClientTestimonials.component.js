import React, {Component} from 'react';
import googleLogo from '../../assets/googleLogoImage.jpg';
import googleLogo2 from "../../assets/google-logo.png"
import justDialLogo from "../../assets/ju7956j474-justdial-logo-justdial-logo-download-vector.png";

import "./ClientTestimonials.scss";

class ClientTestimonialsComponent extends Component {

    state = {
        visibleIndices: [0, 1, 2, 3, 4],
        isMobileView: false
    }

    data = [
        {
            name: 'Banawatremesh Bhima',
            url: 'https://g.co/kgs/KfZzig',
            review: 'Excellent & very  cheap for ENT treatment in Mahaboobnagar District.I was not able to hear properly & some fluids coming  out from my Right EAR. I Visited hospital and check up & X-ray done by Sir & he suggested me for Surgerydue to my Temporal bone was damaged.  The surgery was done on my right EAR successfully . I was under observation for TWO days afterwards I can hear very clearly.Thank you Dr Chandra Sekhar Sir for his giving the best treatment & excellent\n' +
                'infrastructure & staff.From BANAWAT RAMESH BHIMA R/o. Kosgi Mandal District Narayan peth Telangana India.',
        },
        {
            name: 'G Shiva',
            url: 'https://g.co/kgs/Puv6UB',
            review: 'vary   good  The hospital is good and they caring for the patient is also good so professional Dr   thanks for  Treatment   First I have ear problem , I have visited many hospitals but there was no progress ,when my relatives suggested this hospital and I have came here and Dr chabdra shekar solved my problem now I am feeling better.'
        },
        {
            name: 'Dadabasha Shaik',
            url: 'https://g.co/kgs/EKWkwY',
            review: 'Hospital environments are so natural, premises will be so lovable, And Dr treatment and diagnosis is very friendly, no panics and staff also sufficient.  Pharmacy is available and their service also impressed as they narrate about Rx and doses of the medicine, pharmacy will provide useful services to the patient benefit.'
        },
        {
            name: 'Praveen Katamoni',
            url: 'https://g.co/kgs/ZJ3kCJ',
            review: 'He is very good doctor. After a long time we were able to find ENT specialist near by our home. His diagnosis is very good. He describes us the root cause of the disease and why it happened. Apart from prescription he also advises us the remedy to consider so that the disease should not appear frequently'
        },
        {
            name: 'Thatavarthi Rao',
            url: '',
            review: 'I approached Dr. Chandra Sekhar of Sri Devichandra Hospital for the problem of my running nose and thick mucus. He immediately understood my problem and prescribed medicines which worked wonderfully and solved all my problems. Not only that, I regained my smelling sensation, partially, which I lost several years ago due to nasal polyps. I really appreciate his attention to patient\'s problem, quick diagnosis and prescribing right medicines.\n' +
                '\n' +
                'Thatavarthi Ramalingeswar Rao,\n' +
                'Ex Professor & Head,\n' +
                'Department of Chemistry,\n' +
                'Banaras Hindu university,\n' +
                'Varanasi-221005.'
        },
        {
            name: 'Vadithya Sanjeev kkt',
            url: 'https://g.co/kgs/MGwuxF',
            review: 'My classmate in hyderbad advied to se dr.chandrashekar fore my ear pain. He treated me with care and spent good time with me. He explained the problem and diagnosed it early to stop the damage. Now my problem is solved and im happy with the treatment. I would suggest this hospital for everyone with any kind ear nose throat problems.'
        },
    ];

    componentDidMount() {

        const mql = window.matchMedia('(max-width: 768px)');
        let mobileView = mql.matches;

        this.setState({
            isMobileView: mobileView
        });


        this.timeOutHandler = setInterval(() => this.handleSliderClick('next'), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timeOutHandler);
    }

    handleTestimonialClick = (url) => {
        window.open(url, '_blank').focus();
    }

    // handleSliderClick = (type) => {
    //     const { visibleIndices } = this.state;
    //     let updatedIndices = [...visibleIndices];
    //     const firstIndex = visibleIndices[0];
    //     if (type === 'prev') {
    //         updatedIndices = [firstIndex - 1, firstIndex, firstIndex +1 ]
    //     } else if (type === 'next') {
    //         updatedIndices = [firstIndex + 1, firstIndex + 2, firstIndex +3 ]
    //     }
    //     updatedIndices = updatedIndices.map(index => {
    //         if(index < 0) {
    //             return index+ 6;
    //         }
    //         if (index > 5) {
    //             return index - 6;
    //         }
    //         return index;
    //     });
    //     // return updatedIndices;
    //     this.setState({
    //         visibleIndices: updatedIndices
    //     });
    // }

    handleSliderClick = (type) => {
            const { visibleIndices } = this.state;
            let updatedIndices = [...visibleIndices];
            updatedIndices = updatedIndices.map(index => {
                const nextIndex = type === 'prev' ? index + 1 : index - 1;
                if(nextIndex < 0) {
                    return nextIndex+ 6;
                }
                if (nextIndex > 5) {
                    return nextIndex - 6;
                }
                return nextIndex;
            });
            // console.log('updatedIndices', updatedIndices);
            this.setState({
                visibleIndices: updatedIndices
            });
    }

    getFilteredData = () => {
        const { visibleIndices } = this.state;
        const finalData = [];
        visibleIndices.forEach(index => {
            finalData.push(this.data[index]);
        });
        return finalData;
    }

    render() {

        const filteredData = this.getFilteredData();



        return (
            <div className="main-container" id="testimonials">
                <div className="client-testimonials-container">
                <div className="ct-header-wrapper">
                    {/*<div className="header-title">*/}
                    {/*    Testimonials*/}
                    {/*</div>*/}
                    <div className="header-text">
                        Highest Rated ENT Hospital in Mahabubnagar
                    </div>
                </div>

               <div className="hospital-rating">
                   <div className="hospital-rating-google">
                       <div className="hospital-rating-google-name">
                           <img className="rating-provider-image" src={googleLogo2} />
                       </div>
                       <div className="actual-rating">4.6</div>
                       <div className="rating-container">
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star_half</i>
                       </div>
                   </div>
                   {/*<div className="horizontal-separator" />*/}
                   <div className="hospital-rating-justdail">
                       <div className="hospital-rating-justdail-name">
                           {/*<img className="rating-provider-image" src={justDialLogo} />*/}
                           <img className="rating-provider-image" src="https://image1.jdomni.in/jdomni_email/jd_logo.png?output-format=webp" />
                       </div>
                       <div className="actual-rating">4.7</div>
                       <div className="rating-container">
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star_half</i>
                       </div>
                   </div>
               </div>

                <div className="client-testimonials-content">
                    <a className="prev" onClick={() => this.handleSliderClick('prev')}>❮</a>
                    <a className="next" onClick={() => this.handleSliderClick('next')}>❯</a>
                    {filteredData.map((dataItem, index) => (
                        <article
                            className="testimonial-item fade"
                            onClick={() => this.handleTestimonialClick(dataItem.url)}
                            key={dataItem.url}
                            style={{
                                position: 'absolute',
                                left: (index)*400 - 400,
                                transition: 'left 0.2s ease-in',
                                overflow: "hidden"
                            }}
                        >
                            <div className="testimonial-item-header">
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                        {dataItem.name}
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                <div className="rating-wrapper">
                                    <div className="rating-provider">
                                        {this.state.isMobileView? (
                                            <img className="rating-provider-image" src={googleLogo}/>
                                        ): (
                                            <img className="rating-provider-image" src="https://raosentcare.com/wp-content/uploads/2021/07/google-reviews1-150x150.jpg" />
                                        )}
                                    </div>
                                    <div className="rating-container">
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                    </div>
                                </div>

                                <span>
                                    {dataItem.review}
                                </span>
                            </div>
                        </article>
                    ))}



                </div>
            </div>
            </div>
        );
    }
}

export default ClientTestimonialsComponent;
